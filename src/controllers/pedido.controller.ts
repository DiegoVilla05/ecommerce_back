import { Request, Response } from 'express';
import Pedido from '../models/pedido.model';
import { Usuario } from '../models';

export const obtenerPedidos = async (req: Request, res: Response) => {
  try {
    const pedidos = await Pedido.findAll({include:Usuario});
    res.json(pedidos);
  } catch (error) {
    console.error('Error al obtener los pedidos:', error);
    res.status(500).json({ message: 'Error al obtener los pedidos' });
  }
};

export const obtenerPedidoPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    console.error('Error al obtener el pedido:', error);
    res.status(500).json({ message: 'Error al obtener el pedido' });
  }
};

export const crearPedido = async (req: Request, res: Response) => {
  const { usuario_id, estado } = req.body;
  try {
    const pedido = await Pedido.create({ usuario_id, estado });
    res.status(201).json(pedido);
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ message: 'Error al crear el pedido' });
  }
};

export const actualizarPedido = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { usuario_id, estado } = req.body;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    await pedido.update({ usuario_id, estado });
    res.json(pedido);
  } catch (error) {
    console.error('Error al actualizar el pedido:', error);
    res.status(500).json({ message: 'Error al actualizar el pedido' });
  }
};

export const eliminarPedido = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    await pedido.destroy();
    res.json({ message: 'Pedido eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el pedido:', error);
    res.status(500).json({ message: 'Error al eliminar el pedido' });
  }
};

