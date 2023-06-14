require("dotenv").config();
const express = require("express");

// Config do App
const app = express();
app.use(express.json());

// Config Banco de Dados
const { connection, authenticate } = require("./database/database");
authenticate(connection);

// Escuta dos eventos (listen)
app.listen(3000, () => {
  connection.sync();
  console.log("Servidor rodando em http://localhost:3000/");
});