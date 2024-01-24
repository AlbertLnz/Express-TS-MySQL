import mysql2, { ConnectionOptions } from 'mysql2'

const config:ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hpshop',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
}

const pool = mysql2.createPool(config)
