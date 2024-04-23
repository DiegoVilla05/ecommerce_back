import { DataTypes, Model } from "sequelize";
import db from "../../db/db.config";

class Pedido extends Model {
  public pedido_id!: number;
  public usuario_id!: number;
  public fecha_pedido!: Date;
  public estado!: string;
}

Pedido.init({
  pedido_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'user_id'
    }
  },
  fecha_pedido: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'pedidos'
});
  

export default Pedido;
