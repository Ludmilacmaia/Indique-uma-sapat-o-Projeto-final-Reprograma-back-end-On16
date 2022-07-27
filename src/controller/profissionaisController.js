const profissionais = require("../models/profissionaisModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAll = (req, res) => {
  profissionais.find((err, profissionais) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).json(profissionais);
    }
  });
};

const getById = (req, res) => {
  const id = req.params.id;

  profissionais.findById(id, (err, profissionais) => {
    if (err) {
      res.status(404).send({ message: `${err.message} - Id não encontrado` });
    } else {
      res.status(200).send(profissionais);
    }
  });
};

const getByProfissao = (req, res) => {
    const id = req.params.id;
  
    profissionais.findByProfissao(profissao, (err, profissionais) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - profissão não encontrada` });
      } else {
        res.status(200).send(profissionais);
      }
    });
  };


const createProfissional = async (req, res) => {
  try {
    const authHeader = req.get("autorizada")
    if (!authHeader) {
      return res.status(401).json("você precisa de autorização")
    }
    const token = authHeader.split(" ")[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado")
      }
      const allProfissionais = await profissionais.find()
      res.status(200).json(allProfissionais)
    })
    const { nome, profissao, bairro, atendimentoRemoto, telefone, site } = req.body;

    const newProfissional = new profissionais({
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
  try {
    const { nome, cidade, telefone, email } = req.body;

    const updatedDoula = await doulas.findByIdAndUpdate(req.params.id, {
        nome,
        profissao,
        bairro,
        atendimentoRemoto,
        telefone,
        site,
    });
    res.status(200).json(updatedDoula);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteProfissional = (req, res) => {
  const id = req.params.id;

  doulas.findByIdAndDelete(id, (err) => {
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

