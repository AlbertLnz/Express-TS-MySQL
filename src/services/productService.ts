import db from '../database/database'
import { Product } from '../models/product'

class ProductService {

    async getAllProducts(): Promise<Product[]>{
        const products = await db.query('SELECT * FROM Products')
        return products as Product[]
    }

    async getProductById(id:number): Promise<Product | null>{
        const product = await db.query('SELECT * FROM Products WHERE id = ?', id)
        
        if(Array.isArray(product) && product.length > 0){
            return product[0] as Product
        }

        return null
    }

}

export default new ProductService()