import mysql2, { ConnectionOptions, ResultSetHeader, RowDataPacket } from 'mysql2/promise'

const config:ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hpshop',
    connectionLimit: 10,
    waitForConnections: true, // mantener a la espera si llega al límite
    queueLimit: 0 // infinitas esperas
}

const pool = mysql2.createPool(config)


class Database{
    async query<T extends ResultSetHeader | RowDataPacket[]>(sql:string, values:any = null){
        const cn = await pool.getConnection() // cn === connection
        
        try {
            const [results] = await cn.query(sql, values) // [results] --> ResultSetHeader (GET) ~ RowDataPacket (POST, PUT, DELETE)
            return results as T
        } finally {
            cn.release()
        }
    }
}

export default new Database()