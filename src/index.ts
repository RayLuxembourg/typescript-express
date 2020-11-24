import express from 'express'
import { apiRouter } from './components'

const PORT = process.env.PORT || 4000
const app = express()

app.use('/api',apiRouter)

app.listen(PORT,()=> console.log(`Listening on port ${PORT}`))