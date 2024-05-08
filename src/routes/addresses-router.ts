import {Request, Response, Router} from 'express'

export const addressesRouter = Router({})

const addresses = [{id: 1, value: 'Selitskogo'}, {id: 2, value: 'Varvasheni'}]

addressesRouter.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find(a => a.id === +req.params.id)
    if(address) {
        res.send(address)
    } else {
        res.send(404)
    }
})  
  
addressesRouter.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
  