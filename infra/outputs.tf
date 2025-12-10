output "website_bucket" {
  value = aws_s3_bucket.website_root.bucket
}

output "website_logs_bucket" {
  value = aws_s3_bucket.website_logs.bucket
}

output "website_bucket_url" {
  value = "https://${aws_s3_bucket.website_root.website_endpoint}"
}

output "website_url" {
  value = "https://${local.site_url}"
}

output "cf_primary_arn" {
  value = aws_cloudfront_distribution.website_cdn_root.arn
}

output "cf_primary_id" {
  value = aws_cloudfront_distribution.website_cdn_root.id
}
