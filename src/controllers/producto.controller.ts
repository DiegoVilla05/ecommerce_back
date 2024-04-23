import { Request, Response } from 'express';
import Producto from '../models/producto.model';
import Categoria from '../models/categoria.model';

export const getAllProductos = async (req: Request, res: Response) => {
  try {
    const productos = await Producto.findAll({include:Categoria});
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

export const getProductoById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const producto = await Producto.findByPk(id);
    res.json(producto ? producto : { error: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

export const createProducto = async (req: Request, res: Response) => {
  const { nombre, descripcion, precio, cantidad, imagen, categoria_id } = req.body;
  try {
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      cantidad,
      imagen,
      categoria_id
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el producto' });
  }
};

export const updateProductoById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { nombre, descripcion, precio, cantidad, imagen, categoria_id } = req.body;
  try {
    const producto = await Producto.findByPk(id);
    res.json(producto ? await producto.update({
      nombre,
      descripcion,
      precio,
      cantidad,
      imagen,
      categoria_id
    }) : { error: 'Producto no encontrado' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el producto' });
  }
};

export const deleteProductoById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const producto = await Producto.findByPk(id);
    res.json(producto ? await producto.destroy() : { error: 'Producto no encontrado' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el producto' });
  }
};
