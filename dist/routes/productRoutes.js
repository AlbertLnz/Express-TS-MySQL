"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.default.getAllProducts);
productRouter.get('/:id', productController_1.default.getProductById);
productRouter.post('/', productController_1.default.postProduct);
productRouter.put('/:id', productController_1.default.putProduct);
productRouter.delete('/:id', productController_1.default.deleteProduct);
exports.default = productRouter;
