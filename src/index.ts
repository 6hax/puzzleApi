import express from "express"
import { 
  getCategories, 
  getRandomQuestionFromCategory,
  getRandomQuestionFromAnyCategory
} from "./utils/functions/puzzleUtils.js"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT

app.get('/categories', async (_, res) => {
  const allCategories = await getCategories()
  res.status(200).json(allCategories)
})

app.get('/randomPuzzle', async (_, res) => {
  const puzzle = await getRandomQuestionFromAnyCategory()
  res.status(200).json(puzzle)
})

app.get('/randomPuzzleCategory/:category', async (req, res) => {
  const { category } = req.params
  const puzzle = await getRandomQuestionFromCategory(category)
  res.status(200).json(puzzle)
})

app.get('/', (_, res) => res.status(200).send('puzzeApli'))

app.listen(PORT, () => console.log(`🟢 Server running on port ${PORT}`))

