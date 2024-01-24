import db from '../database/database'
import { Product } from '../models/product'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

class ProductService {

    async getAllProducts(): Promise<Product[]>{
        const products = await db.query<RowDataPacket[]>('SELECT * FROM Products')
        return products as Product[]
    }

    async getProductById(id:number): Promise<Product | null>{
        const product = await db.query<RowDataPacket[]>('SELECT * FROM Products WHERE id = ?', id)
        
        if(Array.isArray(product) && product.length > 0){
            return product[0] as Product
        }

        return null
    }

    async postProduct(data:Product): Promise<Product | null>{
        const result = await db.query<ResultSetHeader>('INSERT INTO Products SET ?', data)

        if(result.insertId){
            return await this.getProductById(result.insertId)
        }

        return null
    }

    async putProduct(data:Product, id:number): Promise<Product | null>{
        const result = await db.query<ResultSetHeader>('UPDATE Products SET ? WHERE id = ?', [data, id])

        if(result.affectedRows){
            return await this.getProductById(id)
        }

        return null
    }

}

export default new ProductService()