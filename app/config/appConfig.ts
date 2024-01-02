const dotenv = require("dotenv");
dotenv.config();
const logger = require("node-console-logger");

var SERVER_ENV = verifyenv("SERVER_ENV") || "dev";
var SERVER_PORT = Number(verifyenv("SERVER_PORT")) || 5052;
var DB_HOST = Number(verifyenv("DB_HOST"));
var DB_NAME = Number(verifyenv("DB_NAME"));
var DB_PORT = Number(verifyenv("DB_PORT"));
var DB_USER = Number(verifyenv("DB_USER"));
var DB_PASSWORD = Number(verifyenv("DB_PASSWORD"));
var DB_DIALECT = verifyenv("DB_DIALECT") || "mysql";
var DB_POOL_MAX = Number(verifyenv("DB_POOL_MAX")) || 5;
var DB_POOL_MIN = Number(verifyenv("DB_POOL_MIN")) || 1;
var DB_POOL_ACQUIRE = Number(verifyenv("DB_POOL_ACQUIRE")) || 60000;
var DB_POOL_IDLE = Number(verifyenv("DB_POOL_IDLE")) || 10000;
var DB_POOL_EVICT = verifyenv("DB_POOL_EVICT") || 1000;
var DB_POOL_HANDL_DISCONCT =
  verifyenv("DB_POOL_HANDL_DISCONCT") === "false" ? false : true;

function verifyenv(env_key) {
  if (process.env[env_key] == undefined) {
    logger.info(
      ` Enviornment Configuration not found, using default for ${env_key}`
    );
    return undefined;
  } else {
    logger.info(
      ` Environment Configuration found, using env variable for ${env_key}`
    );
    return process.env[env_key];
  }
}

export var appConfig = {
  server_env: SERVER_ENV,
  version: "1.19.0",
  appName: "EcommerceApp",
  server: {
    port: SERVER_PORT,
  },
  database: {
    host: DB_HOST,
    dbName: DB_NAME,
    dbPort: DB_PORT,
    user: {
      name: DB_USER,
      password: DB_PASSWORD,
    },
    dbDialect: DB_DIALECT,
    pool: {
      max: DB_POOL_MAX,
      min: DB_POOL_MIN,
      acquire: DB_POOL_ACQUIRE,
      idle: DB_POOL_IDLE,
      evict: DB_POOL_EVICT,
      handleDisconnects: DB_POOL_HANDL_DISCONCT,
    },
  },
};
