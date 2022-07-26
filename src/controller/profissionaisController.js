const profissionais = require("../models/profissionaisModels.js");

const getAll = (req, res) => {
  profissionais.find((err, profissionais) => {
    if (err) {
      res.status(500).send({ message: "erro no servidor" });
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

// const getByBairro = async (req, res) => {
//   try {
//     const { bairro } = req.query;
//     const findBairro = await profissionaisModel.find({ bairro: bairro });
//     res.status(200).json(findBairro);
//   } catch (err) {
//     res.status(500).send({ message: "Bairro não encontrado" });
//   }
// };

const createProfissional = async (req, res) => {
  try {
    const { nome, profissao, bairro, atendimentoRemoto telefone, email } = req.body;

    const newProfissional = new profissionais({
      nome,
      profissao,
      bairro,
      atendimentoRemoto,
      telefone,
      email,
    });

    const savedProfissional = await newProfissional.save();

    res.status(201).json(savedProfissional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const changeProfissional = (req, res) => {
  const id = req.params.id;

  doulas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).json({ message: "Profissional atualizada com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
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
        email,
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
  //getByBairro,
  createProfissional,
  changeProfissional,
  updateProfissional,
  deleteProfissional,
};