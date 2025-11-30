import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();


import userRoutes from './Routes/userRoutes.js';
import loginRouter from './Routes/loginRouter.js';
import {loggerMiddleware} from './middleware/loginMiddleware.js';


const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares

app.use(cors());
app.use (morgan('dev'));
app.use (express.json());
app.use(loggerMiddleware);
app.use ('/', userRoutes);
app.use ('/', loginRouter);

//Ruta raiz 
app.get ('/' , (req, res) => (
    res.send ('Servidor funcionando correctamente ')
))

//Manejo de rutas no definidas 
app.use ((req,res)  => {
    res.status (400).send ('Esta ruta no existe')
});

//Iniciar el servidor
app.listen (PORT , () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} `)
});

