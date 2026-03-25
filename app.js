// API REST : GET,POST,PUT,DELETE => express
// Importamos la libreria express
import express from "express";
import cors from "cors";
import CiudadanoRutas from "./src/routes/ciudadano.route.js";
import UsuarioRutas from "./src/routes/usuario.route.js";

// Instanciamos la libreria en un objeto - app
const app = express();

// Middlewares
app.use(express.json()); // Serializa los request y response (para que se entienda JSON en el servidor)
app.use(cors());

// Rutas
app.use("/api", CiudadanoRutas);
app.use("/api", UsuarioRutas);

export default app;
