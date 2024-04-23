import {Router} from 'express';
import { createProducto, deleteProductoById, getAllProductos, getProductoById, updateProductoById } from '../controllers/producto.controller';


const router = Router();

router.get('/',        getAllProductos);
router.get('/:id',    getProductoById );
router.post('/',       createProducto  );
router.put('/:id',    updateProductoById );
router.delete('/:id', deleteProductoById );

export default router;
