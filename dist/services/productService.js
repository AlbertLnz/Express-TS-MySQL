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
const database_1 = __importDefault(require("../database/database"));
class ProductService {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield database_1.default.query('SELECT * FROM Products');
            return products;
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.default.query('SELECT * FROM Products WHERE id = ?', id);
            if (Array.isArray(product) && product.length > 0) {
                return product[0];
            }
            return null;
        });
    }
    postProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Products SET ?', data);
            if (result.insertId) {
                return yield this.getProductById(result.insertId);
            }
            return null;
        });
    }
    putProduct(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('UPDATE Products SET ? WHERE id = ?', [data, id]);
            if (result.affectedRows) {
                return yield this.getProductById(id);
            }
            return null;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('DELETE FROM Products WHERE id = ?', id);
            return result.affectedRows > 0; // if affectedRows is true, then return true. Otherwise, return false.
        });
    }
}
exports.default = new ProductService();
