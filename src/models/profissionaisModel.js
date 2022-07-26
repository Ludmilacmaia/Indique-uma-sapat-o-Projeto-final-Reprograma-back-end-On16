const mongoose = require("mongoose");

const profissionaisSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  profissao: { type: String, required: true },
  bairro: { type: String, required: false },
  atendimentoRemoto: {type: Boolean, required: true},
  telefone: { type: Number, required: true },
  site: { type: String, required: false }
});


const profissionais = mongoose.model('profissionais', profissionaisSchema);

module.exports = profissionais;