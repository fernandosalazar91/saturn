const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/assets', (req, res) => {
    const { address } = req.body;

    const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/assets?owner=0xce6c126eeec5abca0e6a80653a0b693051f55cda&order_direction=desc&offset=0&limit=20'
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

module.exports = server;
