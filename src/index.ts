import express from "express"
import { 
getCategories, 
getRandomQuestionFromCategory,
getRandomQuestionFromAnyCategory
} from "./utils/functions/puzzleUtils.js"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT

app.get('/randomPuzzle', async (req, res) => await getRandomQuestionFromAnyCategory())
app.get('/', (_, res) => res.send('puzzeApli'))

app.listen(PORT,()=> console.log(`on in ${PORT}`))
