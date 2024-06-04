import { generateId } from "../utils/generateId"
import { Product, productsCollection } from "./db"

export const productsRepository = {
    async findProducts(title: string | null | undefined) {
        if(title) {
            return productsCollection.find({title: {$regex: title}}).toArray()
        } else {
            return productsCollection.find({}).toArray()
        }
    },
    async findProductById(id: string) {
        const product: Product | null = await productsCollection.findOne({id: id})
        return product
    },
    async createProducts(title: string) {
        const newProduct = {
            id: generateId(), 
            title
        }
        await productsCollection.insertOne(newProduct)
        return newProduct
    },
    async updateProduct(id: string, title: string) {
        const result = await productsCollection.updateOne({id: id}, {$set: {title: title}})
        
        return result.matchedCount === 1
    },
    async deleteProduct(id: string) {
        const result = await productsCollection.deleteOne({id: id})
        
        return result.deletedCount === 1
    }
}