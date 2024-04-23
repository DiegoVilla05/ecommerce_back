import { Router } from 'express';
import { createCategoria, deleteCategoriaById, getAllCategorias, getCategoriaById, updateCategoriaById } from '../controllers/categoria.model';


const router = Router();

router.get('/',        getAllCategorias );
router.get('/:id',    getCategoriaById );
router.post('/',       createCategoria );
router.put('/:id',    updateCategoriaById );
router.delete('/:id', deleteCategoriaById );

export default router;
