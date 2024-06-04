import { Router } from "express";
import {Request, Response} from 'express'
import { productsRepository } from "../repositories/products-repository";
import { inputValidationMiddleware } from "../middlewares/input-validation-middleware";

export const productsRouter = Router({})

productsRouter.get('/', async (req: Request, res: Response) => {
    const foundProducts = await productsRepository.findProducts(req.query.title?.toString())
    res.send(foundProducts)
})

productsRouter.get('/:id', async (req: Request, res: Response) => {
    let product = await productsRepository.findProductById(req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.send(404)
    }
})

productsRouter.post('/',
  inputValidationMiddleware,
  async (req: Request, res: Response) => {
    const newProduct = await productsRepository.createProducts(req.body.title)
    res.status(201).send(newProduct)
}) 

productsRouter.put('/:id',
  inputValidationMiddleware,
  async (req: Request, res: Response) => {
    const isUpdated = await productsRepository.updateProduct(req.params.id, req.body.title)
    if(isUpdated) {
      const product = await productsRepository.findProductById(req.params.id)
      res.send(product)
    } else {
    res.send(404)
  }
})  

productsRouter.delete('/:id', async (req: Request, res: Response) => {
  const isDeleted = await productsRepository.deleteProduct(req.params.id)
  if(isDeleted) {
    res.send(204)
  } else {
    res.send(404)
  }
})  