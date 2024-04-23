import { Request, Response } from 'express';
import DetallePedido from '../models/detallePedido.model';
import { Pedido, Producto, Usuario } from '../models';
import Categoria from '../models/categoria.model';

export const crearDetallePedido = async (req: Request, res: Response) => {
  try {
    const nuevoDetallePedido = await DetallePedido.create(req.body);
    res.json(nuevoDetallePedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el detalle del pedido' });
  }
};

export const obtenerDetallePedido = async (req: Request, res: Response) => {
  try {
    const detallePedido = await DetallePedido.findByPk(req.params.id,{include:[{model:Pedido, include:[{model:Usuario}]}, {model:Producto, include:[{model:Categoria}]}]});
    if (detallePedido) {
      res.json(detallePedido);
    } else {
      res.status(404).json({ error: 'Detalle del pedido no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el detalle del pedido' });
  }
};

export const actualizarDetallePedido = async (req: Request, res: Response) => {
  try {
    const detallePedido = await DetallePedido.findByPk(req.params.id);
    if (detallePedido) {
      await detallePedido.update(req.body);
      res.json(detallePedido);
    } else {
      res.status(404).json({ error: 'Detalle del pedido no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el detalle del pedido' });
  }
};

export const eliminarDetallePedido = async (req: Request, res: Response) => {
  try {
    const detallePedido = await DetallePedido.findByPk(req.params.id);
    if (detallePedido) {
      await detallePedido.destroy();
      res.json({ message: 'Detalle del pedido eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Detalle del pedido no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el detalle del pedido' });
  }
};
