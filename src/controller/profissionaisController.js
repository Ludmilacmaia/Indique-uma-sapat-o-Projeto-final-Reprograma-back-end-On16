const profissional = require("../models/profissionaisModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

// const getAll = (req, res) => {
//   profissional.find((err, profissional) => {
//     if (err) {
//       res.status(500).send({ message: err.message });
//     } else {
//       res.status(200).json(profissional);
//     }
//   });
// };

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
    // const authHeader = req.get("autorizada")
    // if (!authHeader) {
    //   return res.status(401).json("você precisa de autorização")
    // }
    // const token = authHeader.split(" ")[1]
    // await jwt.verify(token, SECRET, async function (erro) {
    //   if (erro) {
    //     return res.status(403).send("Acesso negado")
    //   }
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
  try {
    const { nome, cidade, telefone, email } = req.body;

    const updatedProfissional = await profissional.findByIdAndUpdate(req.params.id, {
        nome,
        profissao,
        bairro,
        atendimentoRemoto,
        telefone,
        site,
    });
    res.status(200).json(updatedProfissional);
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

