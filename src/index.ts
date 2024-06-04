import bodyParser from 'body-parser'
import express from 'express'
import { productsRouter } from './routes/products-router'


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

app.use('/products', productsRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})