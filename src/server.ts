import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/google-key', (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
