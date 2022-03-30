# Key-API
* Description: A REST API to manage API key usage!
* Creator: Jonathan Stammer

## Contract
Endpoints and data types are viewable on the OpenAPI Specification here: `https://app.swaggerhub.com/apis/BananazTech/key-sys-api/1.0.0`

## EnvVar
| Variable | Example           |
|----------|-------------------|
| DB_PORT  | 3306              |
| DB_HOST  | example.com       |
| DB_USER  | ApiUser           |
| DB_PWD   | examplePassword%% |
| DB_NAME  | data              |
### Development Env
Please set `export` to system variables or use a `.env` file.

### Production
Append to `environment` section of docker-compose.

## Setup
### Running the Project
From the directory in command line, simply run `npm install` to install packages and then execute `npm run dev`.