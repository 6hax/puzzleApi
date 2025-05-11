import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = Router();

routes.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

routes.get('*', (_, res) => {
  res.redirect('/');
});

export { routes };

