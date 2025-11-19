const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const { numero } = req.query;

  if (!numero) {
    return res.status(400).json({ error: 'Parâmetro "numero" não encontrado na query.' });
  }

  res.json({ message: `Olá, seu número da sorte é: ${numero}` });
});

// Only listen when running locally (Termux)
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
  });
}

module.exports = app;
