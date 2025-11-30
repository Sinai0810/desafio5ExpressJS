import {createUserModel,getUserByEmailModel} from '../models/userModels.js';

export const createUserController = async (req,res) =>{
        console.log('Cuerpo recibido:', req.body)

    try {
        const {email, password, rol, lenguage} = req.body;
        const newUser = await createUserModel ({email, password , rol, lenguage});
        return res.status (201).json ({message: 'Usuario creado correctamente', user: newUser})
        
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
      console.log('error', error);
    }
}

export const getUserController = async (req, res) => {
    try {
        const email = req.user; 
        const usuario = await getUserByEmailModel(email);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const { password, ...userWithoutPassword } = usuario;

        res.json(userWithoutPassword);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ message: 'Error al consultar usuario' });
    }
};