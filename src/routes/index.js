const express = require ("express");

const routes = express.Router();

routes.get('/', function (req, res) {
    res.status(200).send({
        title: "Labrys",
        version: "1.0.0"
    })
});

module.exports = routes;