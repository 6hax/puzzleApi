import { Router } from "express";
import { PuzzleController } from "../controllers/puzzleController.js";

export const PuzzleRoutes = Router();

PuzzleRoutes.get('/categories', PuzzleController.getCategories);
PuzzleRoutes.get('/randomPuzzle', PuzzleController.getRandomPuzzle);
PuzzleRoutes.get('/randomPuzzleCategory/:category', PuzzleController.getRandomPuzzleByCategory);

