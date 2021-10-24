const express = require('express');
const cors = require('cors');
const axios = require('axios');

const server = express();

server.use(express.json());
server.use(cors());

module.exports = server;
