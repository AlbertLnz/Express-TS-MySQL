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
const promise_1 = __importDefault(require("mysql2/promise"));
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hpshop',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0 // infinitas esperas
};
const pool = promise_1.default.createPool(config);
class Database {
    query(sql, values = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const cn = yield pool.getConnection(); // cn === connection
            try {
                const [results] = yield cn.query(sql, values); // [results] --> ResultSetHeader (GET) ~ RowDataPacket (POST, PUT, DELETE)
                return results;
            }
            finally {
                cn.release();
            }
        });
    }
}
exports.default = new Database();
