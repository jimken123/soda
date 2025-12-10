variable "environment" {
  type    = string
  default = "dev"
}

variable "application" {
  type    = string
  default = "sequence"
}

variable "domain" {
  type    = string
  default = "sequence.sh"
}

variable "aws_cloudfront_priceclass" {
  type    = string
  default = "PriceClass_100"
}
