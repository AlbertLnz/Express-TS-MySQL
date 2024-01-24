import { Request, Response} from 'express'
import productService from '../services/productService'
import { sendError, sendSuccess } from '../utils/requestHandlers'

class ProductController {

    async getAllProducts(_req: Request, res: Response){
        try {
            const products = await productService.getAllProducts()
            sendSuccess(res, products)
        } catch (error:any) {
            sendError(res, error.message) // Using 'error.message' is not the better way.
        }
    }

    async getProductById(req: Request, res: Response){
        try {
            const id = Number(req.params['id'])
            const product = await productService.getProductById(id)
            
            if(product){
                sendSuccess(res, product)
            }else{
                sendError(res, 'Product Not Found', 404)
            }

        } catch (error:any) {
            sendError(res, error.message)
        }
    }

}

export default new ProductController()