import { productsRepository } from "../repositories/products-repository"
import { generateId } from "../utils/generateId"


export const productsService = {
    async findProducts(title: string | null | undefined) {
        return productsRepository.findProducts(title)
    },
    async findProductById(id: string) {
        return productsRepository.findProductById(id)
    },
    async createProducts(title: string) {
        const newProduct = {
            id: generateId(), 
            title
        }
        const createdProduct = await productsRepository.createProducts(newProduct)
        return createdProduct
    },
    async updateProduct(id: string, title: string) {
        return productsRepository.updateProduct(id, title)
    },
    async deleteProduct(id: string) {
        return productsRepository.deleteProduct(id)
    }
}