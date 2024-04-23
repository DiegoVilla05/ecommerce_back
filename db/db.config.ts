import { Sequelize } from "sequelize";

// const db = new Sequelize('ecommerce_db', 'root', 'iHyI6ROVG9mOCErg',{
//     host: 'localhost',
//     dialect:'mysql',
// })
const db = new Sequelize('ecommerce_db', 'root', '050698',{
    host: 'localhost',
    dialect:'mysql',
})

export default db;