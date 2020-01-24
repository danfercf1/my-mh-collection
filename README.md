# my-mh-collection

My music home collection

## Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Create .env file in project root:

```dotenv
APP_ID=my-mh-collection
PORT=3000
LOG_LEVEL=debug
REQUEST_LIMIT=100kb
SESSION_SECRET=mySecret
MONGO_USERNAME=root
MONGO_PASSWORD=mongodb
MONGO_HOSTNAME=127.0.0.1
MONGO_PORT=27017
MONGO_DB=my-mh-collection

OPENAPI_SPEC=/api/v1/spec
```

## Run docker containers for mongo server

PD: Install docker and docker-compose

[docker](https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-18-04-1-es)

[docker-compose](https://www.digitalocean.com/community/tutorials/como-instalar-docker-compose-en-ubuntu-18-04-es)

Run docker-compose:

```shell
docker-compose up -d
```

## Create the DB:

Enter to [Mongo express](http://localhost:8081) and create the database called `my-mh-collection`.
 
## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/albums` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/albums
  ```


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file

### Check the documentation

[api-explorer](http://localhost:3000/api-explorer/)