import express from 'express';
import {
  crearDetallePedido,
  obtenerDetallePedido,
  actualizarDetallePedido,
  eliminarDetallePedido,
} from '../controllers/detallePedido.controller';

const router = express.Router();

router.post('/', crearDetallePedido );
router.get('/:id', obtenerDetallePedido);
router.put('/:id', actualizarDetallePedido);
router.delete('/:id', eliminarDetallePedido);

export default router;
