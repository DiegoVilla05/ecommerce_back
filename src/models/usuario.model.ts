import { DataTypes, Model } from "sequelize";
import db from "../../db/db.config";

class Usuario extends Model {
  public user_id!: number;
  public nombre!: string;
  public tipo_usu!: string;
  public correo_electronico!: string;
  public contraseña!: string;
  public fecha_registro!: Date;
}

Usuario.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_usu: {
    type: DataTypes.ENUM('CLI', 'ADM'),
    allowNull: false
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_registro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize: db,
  tableName: 'usuarios'
});



  export default Usuario;