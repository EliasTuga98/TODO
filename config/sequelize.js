const Sequelize = require('sequelize');
const configDataBase = require('./database');

const sequelize = new Sequelize(configDataBase);

sequelize.authenticate().then(() => {
  console.log('Connection to database has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to database:', err);
});

module.exports = sequelize;
