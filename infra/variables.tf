variable "environment" {
  type    = string
  default = "dev"
}

variable "application" {
  type    = string
  default = "Phoenix"
}

variable "domain" {
  type    = string
  default = "Phoenix.sh"
}

variable "aws_cloudfront_priceclass" {
  type    = string
  default = "PriceClass_100"
}
