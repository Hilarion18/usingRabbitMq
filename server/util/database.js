const Sequelize = require('sequelize');
var config = require('config');


// const connection = new Sequelize('database-name', 'user-name', 'password', {
//   host: 'localhost',
//   dialect: 'postgres || mysql || mssql || sqlite',
//   logging: false,
// });

exports.connection1 = new Sequelize(config.get('haloConfig.dbConfig.dbName'), config.get('haloConfig.dbConfig.userName'), config.get('haloConfig.dbConfig.password'), {
  host: config.get('haloConfig.dbConfig.host'),
  dialect: config.get('haloConfig.dbConfig.dialect'),
  logging: false,
});