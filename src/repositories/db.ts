import { MongoClient } from "mongodb"

export type Product = {
    id: string
    title: string
}

const mongoUri = process.env.mongoURI || 'mongodb://localhost/'

export const client = new MongoClient(mongoUri)
const db = client.db('shop')

export const productsCollection = db.collection<Product>('products')

export async function runDb() {
    try {
        await client.connect()
        await client.db('products').command({ping: 1})
        console.log('Connected successfully to mongo server')
    } catch (error) {
        console.log(error)
    } 
}