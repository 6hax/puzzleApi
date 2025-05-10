import express from "express";
import cors from "cors";
import { 
  getCategories, 
  getRandomQuestionFromCategory,
  getRandomQuestionFromAnyCategory
} from "./utils/functions/puzzleUtils.js";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/categories', async (_, res) => {
  const allCategories = await getCategories();
  res.status(200).json(allCategories);
});

app.get('/randomPuzzle', async (_, res) => {
  const puzzle = await getRandomQuestionFromAnyCategory();
  res.status(200).json(puzzle);
});

app.get('/randomPuzzleCategory/:category', async (req, res) => {
  const { category } = req.params;
  const puzzle = await getRandomQuestionFromCategory(category);
  res.status(200).json(puzzle);
});


app.get('*', (_, res) => {
  res.redirect('/');
});

app.listen(PORT, () => console.log(`🟢 Server rodando na porta ${PORT}`));

