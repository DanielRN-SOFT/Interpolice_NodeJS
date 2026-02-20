// Modulo para conexión a la base de datos
import mysql from "mysql2/promise";
import dotenv from "dotenv"; // Importa la libreria
dotenv.config(); // Activa las variables del archivo .env

let cnx;
try {
  cnx = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  const conexion = await cnx.getConnection();
  console.log("Conexion a la base de datos");
  conexion.release(); // Cierra la conexion de prueba

  //   console.log(`Conexion exitosa ${connection}`);
} catch (error) {
  console.error(`Ha ocurrido un error en la conexion: ${error.message}`);
}

export const db = cnx;
