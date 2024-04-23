import express, {Application} from 'express';
import cors from 'cors'
import db from '../db/db.config';

import userRoutes from './routes/usuario.router';
import productRoutes from './routes/producto.router'; 
import categoriaRoutes from './routes/categoria.router';
import pedidoRoutes from './routes/pedido.router';
import detallePedidoRoutes from './routes/detallePedido.router';

import './models/index'

class Server {

    async dbConnection() {
        try {
          await db.authenticate();
          console.log('Database online');
          await db.sync(); 
          console.log('Models sincronizado');
        } catch (error) {
          console.error('Database connection error:', error);
        }
      }
      
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        productos: '/api/productos',
        categorias: '/api/categorias',
        pedidos: '/api/pedidos',
        detallesPedidos: '/api/detalles-pedidos'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        //definir las rutas 
        this.routes();
    }

    

      

    middlewares() {
        //CORS
        this.app.use( cors() );

        //lectura del body
        this.app.use(express.json());

        //Carpeta Publica
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
        this.app.use(this.apiPaths.productos, productRoutes);
        this.app.use(this.apiPaths.categorias, categoriaRoutes);
        this.app.use(this.apiPaths.pedidos, pedidoRoutes);
        this.app.use(this.apiPaths.detallesPedidos, detallePedidoRoutes);
    }
    

    listen() {
        this.app.listen( this.port, () => {
            console.log('servidor corriendo en ' + this.port)
        })
    }
}

export default Server;