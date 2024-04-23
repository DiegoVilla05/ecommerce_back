import { DataTypes, Model } from "sequelize";
import db from "../../db/db.config";

class Categoria extends Model {
  public categoria_id!: number;
  public nombre!: string;
}

Categoria.init({
  categoria_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'categorias'
});


export default Categoria;

