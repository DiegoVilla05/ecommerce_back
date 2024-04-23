import { Request, Response } from 'express';
import Categoria from '../models/categoria.model';

export const getAllCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

export const getCategoriaById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const categoria = await Categoria.findByPk(id);
    res.json(categoria ? categoria : { error: 'Categoría no encontrada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

export const createCategoria = async (req: Request, res: Response) => {
  const { nombre } = req.body;
  try {
    const nuevaCategoria = await Categoria.create({ nombre });
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la categoría' });
  }
};

export const updateCategoriaById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { nombre } = req.body;
  try {
    const categoria = await Categoria.findByPk(id);
    res.json(categoria ? await categoria.update({ nombre }) : { error: 'Categoría no encontrada' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la categoría' });
  }
};

export const deleteCategoriaById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const categoria = await Categoria.findByPk(id);
    res.json(categoria ? await categoria.destroy() : { error: 'Categoría no encontrada' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar la categoría' });
  }
};
