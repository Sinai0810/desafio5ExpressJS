import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;
// ================== CONEXION POSTGRES ==================

console.log('Conectando a la base de datos...');

const pool = new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  allowExitOnIdle: true
});

export const createUserModel = async ({email, password, rol, lenguage}) => {
    const hashedPassword = await bcrypt.hashSync(password)
    const query = {
     text : 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1 , $2, $3 , $4) RETURNING email, rol, lenguage ',
     values :[email,hashedPassword, rol, lenguage] 
    }
    const result = await pool.query (query);
    return result.rows[0];

}
export const getUserByEmailModel = async (email) => {
    const query = {
        text : 'SELECT * FROM usuarios WHERE email = $1 ',
        values : [email]
    }
    
    const result = await pool.query (query)
    return result.rows[0]

};


