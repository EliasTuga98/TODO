/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const db_config = require('../config/database');

const Item = require('../models/item');

const connection = new Sequelize(db_config);

Item.init(connection);

module.exports = connection;
