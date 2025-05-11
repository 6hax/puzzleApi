import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { routes } from "./routes.js";
import { PuzzleRoutes } from "./routes/puzzleRoutes.js";
import "dotenv/config"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')));


app.use('/puzzle', PuzzleRoutes);
app.use(routes);
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}!`));

