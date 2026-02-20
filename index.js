// Crea una constante con el puerto local o el asignado en las variables globales de la aplicacion
import app from "./app.js";
import dotenv from "dotenv"; // Importa la libreria - NO DEBE IR ACA ES UN EJEMPLO DE CLASE
dotenv.config(); // Activa las variables del archivo .env

const port = 3000 || process.env.PORT;
// Encendemos el servicio - prendemos la API
app.listen(port, () => {
  console.log(`Servidor corriendo en: ${port}`);
  console.log(process.env); // TODAS LAS VARIABLES DE ENTORNO DE NODE
  console.log(process.env.OS); // SISTEMA OPERATIVO EN QUE SE EJECUTA NODE
  console.log(process.env.NUMBER_OF_PROCESSORS); // NUMERO DE PROCESADORES DEL SERVIDOR DONDE SE EJECUTA NODE
  console.log(process.env.NODE); // RUTA DONDE ESTA INSTALADO NODE
  console.log(process.env.COMPUTERNAME); // NOMBRE DEL SERVIDOR DONDE SE EJECUTA NODE
  console.log(process.env.HOST) // VARIABLE DE USUARIO CREADA EN EL .env
  console.log(process.env.DB_BASE); // VARIABLE DE USUARIO CREADA EN EL .env 
});
