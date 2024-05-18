import {Request, Response, Router} from 'express'
import { adressesRepository } from '../repositories/addresses-repositories'

export const addressesRouter = Router({})

addressesRouter.get('/addresses', (req: Request, res: Response) => {
    const addresses = adressesRepository.getAddresses()
    res.send(addresses)
})

addressesRouter.get('/addresses/:id', (req: Request, res: Response) => {
    let address = adressesRepository.getAddressById(req.params.id)
    if(address) {
        res.send(address)
    } else {
        res.send(404)
    }
})  