import { Router } from "express";
import productController from "../controllers/productController";

const productRouter = Router()

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProductById)
productRouter.post('/', productController.postProduct)
productRouter.put('/:id', productController.putProduct)
productRouter.delete('/:id', productController.deleteProduct)


export default productRouter