const profissional = require("../models/profissionaisModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAll = async (req, res) => {
  try {
    const allProfissionais = await profissional.find();

    if (!allProfissionais) {
      return res.status(404).send("Not Found");
    }
    res.status(200).json(allProfissionais);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = (req, res) => {
  const id = req.params.id;

  profissional.findById(id, (err, profissional) => {
    if (err) {
      res.status(404).send({ message: `${err.message} - Id não encontrado` });
    } else {
      res.status(200).send(profissional);
    }
  });
};

const getByProfissao = (req, res) => {
    const id = req.params.id;
  
    profissional.findByProfissao(profissao, (err, profissional) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - profissão não encontrada` });
      } else {
        res.status(200).send(profissional);
      }
    });
  };


const createProfissional = async (req, res) => {
  try {

      const allprofissionais = await profissional.find()
      res.status(200).json(allprofissionais)
    
    const { nome, profissao, bairro, atendimentoRemoto, telefone, site } = req.body;

    const newProfissional = new profissional({
      nome,
      profissao,
      bairro,
      atendimentoRemoto,
      telefone,
      site,
    });

    const savedProfissional = await newProfissional.save();
    res.status(201).json(savedProfissional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


const updateProfissional = async (req, res) => {
   
          const { nome, profissao, bairro, atendimentoRemoto, telefone, site } = req.body
          const { _id } = req.params

          const findProfissional = await profissional.findById(_id)

          if (findProfissional == null) {
              return res.status(404).json({ message: "id inválido" })
          }

          findProfissional.nome = nome || findProfissional.nome
          findProfissional.profissao = profissao || findProfissional.profissao
          findProfissional.bairro = bairro || findProfissional.bairro
          findProfissional.atendimentoRemoto = atendimentoRemoto || findProfissional.atendimentoRemoto
          findProfissional.telefone = telefone || findProfissional.telefone
          findProfissional.site = site || findProfissional.site

          const savedProfissional = findProfissional.save()
          res.status(200).json({ message: "profissional atualizada com sucesso!", savedProfissional })
      }
  
  

const deleteProfissional = (req, res) => {
  const id = req.params.id

  profissional.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "Profissional excluída com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

module.exports = {
  getAll,
  getById,
  getByProfissao,
  createProfissional,
  updateProfissional,
  deleteProfissional,
};

