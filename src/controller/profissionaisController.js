const profissional = require("../models/profissionaisModel")
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
      
  
        const { nome, profissao, bairro, atendimentoRemoto, telefone, site } = req.body
  
        const newProfissional = new profissional ({
          nome, profissao, bairro, atendimentoRemoto, telefone, site
        })
  
        const savedProfissional = await newProfissional.save()
  
        res.status(201).json(savedProfissional)
      } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
  }

  // const updateProfissional = async (req, res) => {
  //   try {
      
  //       const { nome, profissao, bairro, atendimentoRemoto, telefone, site } = req.body
  //       const updatedProfissional = await profissional.findByIdAndUpdate(req.params.id, {
  //           nome, profissao, bairro, atendimentoRemoto, telefone, site
  //         })
  //       // const updatedProfissional = await profissional.findById(req.params.id)
  //       const savedProfissional = await updatedProfissional.save()
  //       res.status(200).json(savedProfissional)
        
  //         // console.log(updatedProfissional)
  //     } catch (error) {
  //     console.error(error)
  //     res.status(500).json({ message: error.message })
  //   }
  // }

  // const updateProfissional = async (req, res) => {
  //   try {
  //       const {
  //         id
  //       } = req.params;
  //       const {
  //         nome, profissao, bairro, atendimentoRemoto, telefone, site
  //       } = req.body;
  //       const findProfissionais = await profissional.findById(id);
  //     if (!findProfissionais.length) {
  //       return res.status(404).json({ message: "Profissional not found" });
  //     }
      
  //       findProfissionais.nome = nome || findProfissionais.nome;
  //       findProfissionais.profissao = profissao || findProfissionais.profissao;
  //       findProfissionais.bairro = bairro || findProfissionais.bairro;
  //       findProfissionais.atendimentoRemoto = atendimentoRemoto || findProfissionais.atendimentoRemoto;
  //       findProfissionais.telefone = telefone || findProfissionais.telefone;
  //       findProfissionais.site = site || findProfissionais.site;
  //       const savedProfissionais = await findProfissionais.save();
  //       res.status(200).json(savedProfissionais);
  //   } catch (error) {
  //     res.status(500).json({
  //       message: error.message
  //     });
  //   }
  // };

const updateProfissional = async (req, res) => {
  try {
    const { nome, profissao, bairro, atendimentoRemoto, telefone, site } = req.body;
    const updateProfissional = await profissional.findByIdAndUpdate(
      req.params.id,
      {
        nome, profissao, bairro, atendimentoRemoto, telefone, site
      }
    );
    res.status(200).json(updateProfissional);
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

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

