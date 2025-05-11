import { Request, Response } from "express"
import { 
getCategories,
getRandomQuestionFromAnyCategory,
getRandomQuestionFromCategory
} from '../utils/functions/puzzleUtils.js'

export class PuzzleController {
  static async getCategories(_req: Request, res: Response) {
    const allCategories = await getCategories();
    res.status(200).json(allCategories);
  }

  static async getRandomPuzzle(_req: Request, res: Response) {
    const puzzle = await getRandomQuestionFromAnyCategory();
    res.status(200).json(puzzle);
  }

  static async getRandomPuzzleByCategory(req: Request, res: Response) {
    const { category } = req.params;
    const puzzle = await getRandomQuestionFromCategory(category);
    res.status(200).json(puzzle);
  }
}

