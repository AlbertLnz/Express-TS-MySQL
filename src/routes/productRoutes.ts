import { Router } from "express";
import productController from "../controllers/productController";

const productRouter = Router()

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProductById)
productRouter.post('/', productController.postProduct)
productRouter.put('/:id', productController.putProduct)


export default productRouter