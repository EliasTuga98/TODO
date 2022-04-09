/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const { Pool, Client } = require('pg');
const express = require('express');
const cors = require('cors');
require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const itemRoutes = require('./routes/itemRoutes');

app.use('/', itemRoutes);
app.use('/item', itemRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
