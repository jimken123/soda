terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.60"
    }
  }

  backend "http" {
  }

  required_version = ">= 1.0.11"
}

# Modified from: https://github.com/cloudmaniac/terraform-aws-static-website

provider "aws" {
  region = "eu-west-2"
}

provider "aws" {
  alias  = "cert"
  region = "us-east-1"
}

locals {
  site_url = var.environment == "production" ? var.domain : "${var.environment}.${var.domain}"
}

locals {
  default_tags = {
    environment = var.environment
    application = var.application
    url         = local.site_url
    managed_by  = "terraform"
    last_update = formatdate("YYYY-MM-DD hh:mm ZZZ", timestamp())
  }
}

data "aws_route53_zone" "main" {
  name         = var.domain
  private_zone = false
}

data "aws_acm_certificate" "site" {
  provider    = aws.cert
  domain      = var.domain
  statuses    = ["ISSUED"]
  most_recent = true
}

resource "aws_s3_bucket" "website_logs" {
  bucket = "${local.site_url}-logs"
  acl    = "log-delivery-write"

  force_destroy = true

  tags = local.default_tags

  lifecycle {
    ignore_changes = [tags["last_update"]]
  }
}

resource "aws_s3_bucket" "website_root" {
  bucket = local.site_url
  acl    = "public-read"

  force_destroy = true

  logging {
    target_bucket = aws_s3_bucket.website_logs.bucket
    target_prefix = "${local.site_url}/"
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = local.default_tags

  lifecycle {
    ignore_changes = [tags["last_update"]]
  }
}

resource "aws_s3_bucket_policy" "update_website_root_bucket_policy" {
  bucket = aws_s3_bucket.website_root.id

  policy = jsonencode({
    Version = "2012-10-17"
    Id      = "PolicyForWebsiteEndpointsPublicContent"
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject"
        Resource = [
          "${aws_s3_bucket.website_root.arn}/*",
          "${aws_s3_bucket.website_root.arn}"
        ]
      }
    ]
  })

}

resource "aws_cloudfront_distribution" "website_cdn_root" {
  enabled     = true
  price_class = var.aws_cloudfront_priceclass

  aliases = [ local.site_url ]

  origin {
    origin_id   = "origin-bucket-${aws_s3_bucket.website_root.id}"
    domain_name = aws_s3_bucket.website_root.website_endpoint

    custom_origin_config {
      origin_protocol_policy = "http-only"
      http_port            = 80
      https_port           = 443
      origin_ssl_protocols = ["TLSv1.2", "TLSv1.1", "TLSv1"]
    }
  }

  default_root_object = "index.html"

  logging_config {
    bucket = aws_s3_bucket.website_logs.bucket_domain_name
    prefix = "${local.site_url}/"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "origin-bucket-${aws_s3_bucket.website_root.id}"
    min_ttl          = "0"
    default_ttl      = "300"
    max_ttl          = "1200"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.site.arn
    ssl_support_method  = "sni-only"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_page_path    = "/404.html"
    response_code         = 404
  }

  tags = local.default_tags

  lifecycle {
    ignore_changes = [
      tags["last_update"],
      viewer_certificate,
    ]
  }
}

resource "aws_route53_record" "website_cdn_root_record" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = local.site_url
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_cdn_root.domain_name
    zone_id                = aws_cloudfront_distribution.website_cdn_root.hosted_zone_id
    evaluate_target_health = false
  }
}

########## Redirect www for production ##########
resource "aws_s3_bucket" "website_redirect" {
  count = var.environment == "production" ? 1 : 0

  bucket = "www.${local.site_url}"
  acl    = "public-read"

  force_destroy = true

  logging {
    target_bucket = aws_s3_bucket.website_logs.bucket
    target_prefix = "www.${local.site_url}/"
  }

  website {
    redirect_all_requests_to = "https://${local.site_url}"
  }

  tags = local.default_tags

  lifecycle {
    ignore_changes = [tags["last_update"]]
  }
}

resource "aws_cloudfront_distribution" "website_cdn_redirect" {
  count = var.environment == "production" ? 1 : 0

  enabled     = true
  price_class = var.aws_cloudfront_priceclass
  
  aliases = [ "www.${local.site_url}" ]

  origin {
    origin_id   = "origin-bucket-${aws_s3_bucket.website_redirect[0].id}"
    domain_name = aws_s3_bucket.website_redirect[0].website_endpoint

    custom_origin_config {
      origin_protocol_policy = "http-only"
      http_port            = 80
      https_port           = 443
      origin_ssl_protocols = ["TLSv1.2", "TLSv1.1", "TLSv1"]
    }
  }

  logging_config {
    bucket = aws_s3_bucket.website_logs.bucket_domain_name
    prefix = "www.${local.site_url}/"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "DELETE"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "origin-bucket-${aws_s3_bucket.website_redirect[0].id}"
    min_ttl          = "0"
    default_ttl      = "300"
    max_ttl          = "1200"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.site.arn
    ssl_support_method  = "sni-only"
  }

  tags = local.default_tags

  lifecycle {
    ignore_changes = [
      tags["last_update"],
      viewer_certificate,
    ]
  }
}

resource "aws_route53_record" "website_cdn_redirect_record" {
  count = var.environment == "production" ? 1 : 0

  zone_id = data.aws_route53_zone.main.zone_id
  name    = "www.${local.site_url}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_cdn_redirect[0].domain_name
    zone_id                = aws_cloudfront_distribution.website_cdn_redirect[0].hosted_zone_id
    evaluate_target_health = false
  }
}
