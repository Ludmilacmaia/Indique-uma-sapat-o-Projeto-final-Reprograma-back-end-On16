require("dotenv-safe").config();
const express = require("express");
const cors = require("cors"); const swaggerFile = require("../swagger/swagger_output.json");
const swaggerUi = require("swagger-ui-express");
const app = express();
const mongooose = require("./database/mongooseConnect")


app.use(express.json());
app.use(cors());
app.use("/minha-documentação", swaggerUi.serve, swaggerUi.setup(swaggerFile));
mongooose.connect()

module.exports = app

