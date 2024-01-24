"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
const requestHandlers_1 = require("../utils/requestHandlers");
class ProductController {
    getAllProducts(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.getAllProducts();
                (0, requestHandlers_1.sendSuccess)(res, products);
            }
            catch (error) {
                (0, requestHandlers_1.sendError)(res, error.message); // Using 'error.message' is not the better way.
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params['id']);
                const product = yield productService_1.default.getProductById(id);
                if (product) {
                    (0, requestHandlers_1.sendSuccess)(res, product);
                }
                else {
                    (0, requestHandlers_1.sendError)(res, 'Product Not Found', 404);
                }
            }
            catch (error) {
                (0, requestHandlers_1.sendError)(res, error.message);
            }
        });
    }
    postProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body; // need to validate!
                const product = yield productService_1.default.postProduct(data);
                if (product) {
                    (0, requestHandlers_1.sendSuccess)(res, product);
                }
                else {
                    (0, requestHandlers_1.sendError)(res, 'Product Not Created', 422); // 422 -> Unprocessable Entity
                }
            }
            catch (error) {
                (0, requestHandlers_1.sendError)(res, error.message);
            }
        });
    }
    putProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body; // need to validate!
                const id = Number(req.params['id']);
                const product = yield productService_1.default.putProduct(data, id);
                if (product) {
                    (0, requestHandlers_1.sendSuccess)(res, product);
                }
                else {
                    (0, requestHandlers_1.sendError)(res, 'Product Not Found', 404);
                }
            }
            catch (error) {
                (0, requestHandlers_1.sendError)(res, error.message);
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params['id']);
                const itsDeleted = yield productService_1.default.deleteProduct(id);
                if (itsDeleted) {
                    (0, requestHandlers_1.sendSuccess)(res, {});
                }
                else {
                    (0, requestHandlers_1.sendError)(res, 'Product Not Found', 404);
                }
            }
            catch (error) {
                (0, requestHandlers_1.sendError)(res, error.message);
            }
        });
    }
}
exports.default = new ProductController();
