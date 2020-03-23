# http-lambda-invoker-example
Demo of adding a serverless function into an existing docker-based local development environment.

Check out the [blog post](https://dev.to/elthrasher/integrating-sam-into-container-workflows-with-http-lambda-invoker-4o8) explaining why.

## Dependencies and build

* `npm i`
* `npm run build`

## Start composition

* `docker-compose up -d --build`

## Test app

* `http://localhost`

## Shut it all down

* `docker-compose down -v`

## Troubleshooting

If you have other apps or services running on your workstation, you may experience port conflicts when starting Docker. Just edit the left side in the port mappings in the docker-compose file.
