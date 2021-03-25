#!/bin/sh

###########################
# Script for Deploy Stage #
###########################

AWS_ACCESS_KEY_ID=$1
AWS_SECRET_ACCESS_KEY=$2
ECR_REPO_URI=$3
ENV=$4

DEFI_LANDING_PAGE_IMAGE=${ECR_REPO_URI}:${ENV}-landing-${CI_PIPELINE_ID}

# config aws cli
aws configure set aws_access_key_id     $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set default.region        $AWS_DEFAULT_REGION

aws ecr get-login --no-include-email | sh

# load docker image before build
docker load -i image-landing/landing.tar || echo "Cache landing image does not exist"

# build docker image
docker build --cache-from landing  -f Dockerfile -t landing .

# cache docker image
mkdir -p image-landing
docker save -o image-landing/landing.tar landing

# push image
docker tag landing   $DEFI_LANDING_PAGE_IMAGE
docker push $DEFI_LANDING_PAGE_IMAGE
