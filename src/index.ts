import bodyParser from 'body-parser'
import express, {Request, Response} from 'express'

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

const products = [{id: 1, title: 'milk'}, {id: 2, title: 'coffee'}]
const addresses = [{id: 1, value: 'Selitskogo'}, {id: 2, value: 'Varvasheni'}]

app.get('/products', (req: Request, res: Response) => {
    if(req.query.title) {
        let searchString = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
  } else {
    res.send(products)
  }
})

app.get('/products/:productTitle', (req: Request, res: Response) => {
    let product = products.find(p => p.title === req.params.productTitle)
    if(product) {
        res.send(product)
    } else {
        res.send(404)
    }
})

app.post('/products', (req: Request, res: Response) => {
    const newProduct = {id: +(new Date()), title: req.body.title}
    products.push(newProduct)
    res.status(201).send(newProduct)
}) 

app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if(products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
        
    } 
    res.send(404)
})  
app.put('/products/:id', (req: Request, res: Response) => {
  let product = products.find(p => p.id === +req.params.id)
  if(product) {
    product.title = req.body.title
    res.send(200)
  } else {
    res.send(404)
  }
  
})  

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})

app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find(a => a.id === +req.params.id)
    if(address) {
        res.send(address)
    } else {
        res.send(404)
    }
})  
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })