const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const { numero } = req.query;

  if (!numero) {
    return res.status(400).json({ error: 'Parâmetro "numero" não encontrado na query.' });
  }

  res.json({ message: `Olá, seu número da sorte é: ${numero}` });
});

// A Vercel gerencia a porta, então não precisamos do app.listen
module.exports = app;
