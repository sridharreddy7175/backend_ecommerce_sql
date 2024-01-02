import {appConfig}  from "../../config/appConfig";
const mysql = require("mysql");
const host=appConfig.database.host ,
      db= appConfig.database.dbName,
      port = appConfig.database.dbPort,
      username=appConfig.database.user.name , 
      password=appConfig.database.user.password,
      dbDialect=appConfig.database.dbDialect; 
const Sequelize = require('sequelize');

let pool={
  max: appConfig.database.pool.max,
  min: appConfig.database.pool.min,
  acquire: appConfig.database.pool.acquire,
  idle: appConfig.database.pool.idle,
  evict: appConfig.database.pool.evict,
  handleDisconnects: appConfig.database.pool.handleDisconnects
}
const DBConnection = new Sequelize(db, username, password, {
    host: host,
    port: port,
    dialect: dbDialect,
    define: {
        freezeTableName: true
    },
    pool: pool,
    logging: true,
});

DBConnection.authenticate()
.then(() => {
  console.log('[DB] Connection has been established successfully.');
})
.catch(err => {
  console.error('[err][DB] Unable to connect to the database:', {msg: err});
});






export { DBConnection };