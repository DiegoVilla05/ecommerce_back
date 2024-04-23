import { Request, Response } from "express"
import Usuario from "../models/usuario.model"



export const getUsuarios = async(req: Request, res:Response) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
}

export const getUsuario = async(req: Request, res:Response) => {
    const {id} = req.params;

    const usuario = await Usuario.findByPk( id );
    
    usuario ? res.json(usuario) : res.status(404).json({ msg:`No existe un usuario con el id ${ id }` });

}

export const postUsuario = async(req: Request, res:Response) => {
    const {body} = req;
    try {
        const existeEmail = await Usuario.findOne({
            where: {
                correo_electronico: body.correo_electronico
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg:'Ya existe un usuario con el email' + body.correo_electronico
            })
        }
        const usuario = await Usuario.create(body);

        usuario ? res.json(usuario) : res.status(500).json({ msg: 'No se pudo crear el usuario' });

    } catch (error) {

        console.error('Error al crear el usuario:', error);
        res.status(500).json({
            msg: 'Error al crear el usuario. Consulte con el administrador.'
        });
    }
};

export const putUsuario = async(req: Request, res:Response) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const usuario = await Usuario.findByPk( id );
        if (!usuario) {
            return res.status(404).json({
                msg:'No existe un usuario con el id' + id
            });
        }
        
        await usuario.update(body);

        res.json(usuario);

    } catch (error) {

        console.error('Error al crear el usuario:', error);
        res.status(500).json({
            msg: 'Error al crear el usuario. Consulte con el administrador.'
        });
    }
}

export const deleteUsuario =async(req: Request, res:Response) => {
    const {id} = req.params;

    const usuario = await Usuario.findByPk( id );
        if (!usuario) {
            return res.status(404).json({
                msg:'No existe un usuario con el id' + id
            });
        }

        await usuario.destroy();

    res.json(usuario)
}
