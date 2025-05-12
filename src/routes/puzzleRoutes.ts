import { Router } from "express";
import { PuzzleController } from "../controllers/puzzleController.js";

export const PuzzleRoutes = Router();

PuzzleRoutes.get('/listCategories', PuzzleController.getCategories);
PuzzleRoutes.get('/randomPuzzle', PuzzleController.getRandomPuzzle);
PuzzleRoutes.get('/puzzleByCategory/:category', PuzzleController.getRandomPuzzleByCategory);

