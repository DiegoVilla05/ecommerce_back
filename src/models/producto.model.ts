import { DataTypes, Model } from "sequelize";
import db from "../../db/db.config";

class Producto extends Model {
  public producto_id!: number;
  public nombre!: string;
  public descripcion!: string;
  public precio!: number;
  public cantidad!: number;
  public imagen!: string;
  public categoria_id!: number;
}

Producto.init({
  producto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categorias',
      key: 'categoria_id'
    }
  }
}, {
  sequelize: db,
  tableName: 'productos'
});


export default Producto;
