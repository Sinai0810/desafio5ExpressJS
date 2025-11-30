import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const verifyTokenMiddleware = (req, res, next) => {
    try {
        const token = req.headers['authorization'] 
        if (!token) {
            return res.status(401).json({message: 'El token debe estar presente'});
        }
        const extractToken = token.split(' ')[1];
        const decoded = jwt.verify(extractToken, process.env.JWT_SECRET);
        req.user = decoded.email;

        next();
    } catch (error) {
        res.status(401).json({message: 'Token inválido'});
        console.log('error', error);    
        
    }
}

