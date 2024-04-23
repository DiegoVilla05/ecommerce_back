import Usuario from './usuario.model';
import CategoriaProducto from './categoria.model';
import Producto from './producto.model';
import Pedido from './pedido.model';
import DetallePedido from './detallePedido.model';
import db from '../../db/db.config'; 

Producto.belongsTo(CategoriaProducto, { foreignKey: 'categoria_id' });
CategoriaProducto.hasMany(Producto, { foreignKey: 'categoria_id' });

DetallePedido.belongsTo(Pedido, { foreignKey: 'pedido_id' });
Pedido.hasMany(DetallePedido, { foreignKey: 'pedido_id' });

DetallePedido.belongsTo(Producto, { foreignKey: 'producto_id' });
Producto.hasMany(DetallePedido, { foreignKey: 'producto_id' });

Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Usuario.hasMany(Pedido, { foreignKey: 'usuario_id' });

db.sync()
  .then(() => {
    console.log('Modelos sincronizados correctamente');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos:', error);
  });


export { Usuario, CategoriaProducto, Producto, Pedido, DetallePedido };
