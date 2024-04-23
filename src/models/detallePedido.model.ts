import { DataTypes, Model } from "sequelize";
import db from "../../db/db.config";

class DetallePedido extends Model {
  public detalle_id!: number;
  public pedido_id!: number;
  public producto_id!: number;
  public cantidad!: number;
}

DetallePedido.init({
  detalle_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pedidos',
      key: 'pedido_id'
    }
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'productos',
      key: 'producto_id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'detalles_pedidos'
});


export default DetallePedido;
