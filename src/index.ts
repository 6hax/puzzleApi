import express from "express"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT

app.get('/', (_, res) => res.send('puzzeApli'))

app.listen(PORT,()=> console.log(`on in ${PORT}`))
