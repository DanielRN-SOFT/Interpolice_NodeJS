// Crea una constante con el puerto local o el asignado en las variables globales de la aplicacion

import app from "./src/app.js";
const port = 3000 || process.env.PORT;
// Encendemos el servicio - prendemos la API
app.listen(port, () => {
  console.log(`Servidor corriendo en: ${port}`);
});
