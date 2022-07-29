const mongoose = require ('mongoose')

const profissionaisSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome:{
        type: String, 
        required: true,

    },

    profissao:{
        type: String,
        required: true,
        
    },

    bairro:{
        type: String,
        required: false,

    },

    atendimentoRemoto:{
        type: Boolean,
        required: true,
    },

    telefone:{
        type: Number,
        required: true,
  

    },
    site:{
      type: String,
      required: false,
      
    }

},{timestamps:true})

const Model = mongoose.model('profissionais', profissionaisSchema)

module.exports = Model