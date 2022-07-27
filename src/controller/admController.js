const Adm = require("../models/admModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = `${process.env.TOKEN_SECRET}`;


const createNewAdm = (req, res) => {
  const passwordWithHash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = passwordWithHash;
  const adm = new Adm(req.body);
  adm.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(201).send(adm);
  });
};
