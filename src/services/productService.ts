import db from '../database/database'
import { Product } from 'models/product'

class ProductService {

    async getAllProducts(): Promise<Product[]>{
        const products = await db.query('SELECT * FROM Products')
        return products as Product[]
    }

}

export default new ProductService()