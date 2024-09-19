//CRIar SERBBIDOR
const express = require("express");
const app = express();
const PORT = 3333;

//CRIaR ROTAS
app.get("/", (req, res) => {
  res.send("<p>Parágrafo...</p>");
});

//RODAR SERVIDOR NUA DADA PORTA
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
