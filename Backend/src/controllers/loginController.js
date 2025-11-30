import bcrypt  from "bcryptjs";
import { getUserByEmailModel } from "../models/userModels.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();


export const loginController = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await getUserByEmailModel(email);
        if (!user) {
            return res.status(404).json({ message: 'Usuario o contraseña incorrecta' })
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(404).json({message : 'Usuario no autorizado'})
        } 
        const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({message: 'Login exitoso', token});

    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
        console.log('error', error);
        
    }
}