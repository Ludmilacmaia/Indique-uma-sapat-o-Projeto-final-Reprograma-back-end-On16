const controller = require('../controller/admController');
const express = require('express');
const routes = express.Router();


routes.post('/adm', controller.createNewAdm)
routes.get('/adm', controller.allAdm)
routes.post('/adm/login', controller.login)
routes.delete('/adm/:id', controller.deleteById)


module.exports = routes