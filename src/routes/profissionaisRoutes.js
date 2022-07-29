const express = require ('express');
const controller = require('../controller/profissionaisController.js');

const routes = express.Router();

routes.get("/todas", controller.getAll);
routes.get('/profissao', controller.getByProfissao);
routes.post('/create', controller.createProfissional);
routes.patch('/update/:id', controller.updateProfissional);
routes.get('/id/:id', controller.getById);
routes.delete('/delete/:id', controller.deleteProfissional);


module.exports = routes;