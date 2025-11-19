const express = require('express');
const app = express();

// Use port 3000 by default or Vercel's port
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const { numero } = req.query;

  if (!numero) {
    return res.status(400).json({ error: 'Parâmetro "numero" não encontrado na query.' });
  }

  res.json({ message: `Olá, seu número da sorte é: ${numero}` });
});

// LOCAL SERVER (needed for Termux)
if (!process.env.VERCEL) {
  app.listen(port, "0.0.0.0", () => {
    console.log(`API rodando em http://0.0.0.0:${port}`);
  });
}

module.exports = app;
