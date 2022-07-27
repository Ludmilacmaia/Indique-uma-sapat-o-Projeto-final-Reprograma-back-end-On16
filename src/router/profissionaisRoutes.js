const express = require ('express');
const controller = require('../controller/profissionaisController.js');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/profissao', controller.getByProfissao);
router.post('/create', controller.createProfissional);
router.patch('/:id', controller.updateProfissional);
router.delete('/:id', controller.deleteProfissional);


module.exports = router;