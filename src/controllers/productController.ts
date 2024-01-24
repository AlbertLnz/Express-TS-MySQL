import { Request, Response} from 'express'
import productService from '../services/productService'

class ProductController {

    async getAllProducts(_req: Request, res: Response){
        const products = await productService.getAllProducts()
        res.json(products)
    }

}

export default new ProductController()