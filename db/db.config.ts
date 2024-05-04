import { Sequelize } from "sequelize";

// const db = new Sequelize('ecommerce_db', 'root', 'iHyI6ROVG9mOCErg',{
//     host: 'localhost',
//     dialect:'mysql',
// })
const db = new Sequelize(
    process.env.DB_NAME || 'ecommerce_db',
    process.env.DB_USER || 'root', 
    process.env.DB_PASSWORD || '050698',{
    host: process.env.DB_HOST || 'localhost',
    dialect:'mysql',
})

export default db;