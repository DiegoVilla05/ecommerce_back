import { Sequelize } from "sequelize";

// const db = new Sequelize('ecommerce_db', 'root', '050698',{
//     host: 'localhost',
//     dialect:'mysql',
// })
const db = new Sequelize(process.env.MYSQL_URL || 'mysql://root:iHyI6ROVG9mOCErg@localhost:3306/ecommerce_db')


export default db;