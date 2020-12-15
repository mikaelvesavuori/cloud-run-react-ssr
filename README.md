# React serverless-side-rendering on Cloud Run

React SSR can be a pain if you don't want to run Next or another ready-made solution. This repo tries to solve that.

This repo gives you a minimal-ish React setup with Typescript configured to be bundled with Docker for a server-side container, and with files (those outside the `src` folder) ready to build a client-side bundle. There's a bit of scripting to help you set up a minimal Cloud Run app, and with an option to bring in a fuller CI/CD solution on Google Cloud Platform.

There is nothing magic about the container or core source part of this—feel free to use it in Fargate, Azure Container Instances or wherever you like!

**Note**: There is currently no typical Webpack "dev" support, you should add this configuration on your own, as/if needed.

## Prerequisites

The below is primarily relevant if you want to deploy this on Cloud Run. Else, you would probably only need Docker.

- You have a Google Cloud Platform account
- You are logged-in on the Google Cloud Platform
- You have credentials that can deploy and run applications on Cloud Run (including building them on Cloud Build)
- You've put in your own project ID `scripts/vars.sh`

## Develop and test

There's a basic `build-and-run.sh` script that will build and run the server with Docker. You can also just run `npm run start` in the `src` folder.

## Initialize resources

Set and export variables with `sh scripts/vars.sh`, then run `sh scripts/init.sh`. Uncomment the lower part if you want continuous build etc.

## Deploy server

Run `npm run update:client` which will build and deploy the server to Cloud Run (building it on Cloud Build).

## Deploy client

Run `npm run update:client` which will build and deploy the client to Google Cloud Storage.

## Remove resources

Run `sh scripts/teardown.sh`. Make sure to verify that buckets and registries are empty when the script is finished.
