const express = require ('express');
const controller = require('../controller/profissionaisController.js');

const routes = express.Router();

routes.get("/todas", controller.getAll);
routes.get('/profissao', controller.getByProfissao);
routes.get('/:id', controller.getById);
routes.post('/create', controller.createProfissional);
routes.patch('/:id', controller.updateProfissional);
routes.delete('/:id', controller.deleteProfissional);


module.exports = routes;