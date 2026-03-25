import { Router } from "express";
import * as UsuarioCtr from "../controllers/usuario.controller.js";

const router = Router();
console.log(router);
router.get("/usuarios/listartodos", UsuarioCtr.getUsuarios);
router.get("/usuarios/listarporid/:id", UsuarioCtr.getUsuarioById);
router.post("/usuarios/crear", UsuarioCtr.createUsuario);
router.put("/usuarios/actualizar/:id", UsuarioCtr.updateUsuario);
router.delete("/usuarios/eliminar/:id", UsuarioCtr.deleteUsuario);

export default router;
