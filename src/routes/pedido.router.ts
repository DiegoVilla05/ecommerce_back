import { Router } from 'express';
import { actualizarPedido, crearPedido, eliminarPedido, obtenerPedidoPorId, obtenerPedidos } from '../controllers/pedido.controller';


const router = Router();

router.get('/', obtenerPedidos );
router.get('/:id', obtenerPedidoPorId );
router.post('/', crearPedido );
router.put('/:id', actualizarPedido );
router.delete('/:id', eliminarPedido );

export default router;