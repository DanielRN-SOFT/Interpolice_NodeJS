import { db } from "./bdatos.js";
import bcrypt from "bcryptjs";

export const UsuarioModel = {
  findAll: async () => {
    const sql = "SELECT * FROM usuario";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM usuario WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const { email, password, nombre, apellidos, avatar, rol } = data;

    // Validar que el email no existe
    const [existeEmail] = await db.query(
      "SELECT * FROM usuario WHERE email = ?",
      [email],
    );
    if (existeEmail.length > 0) {
      throw new Error("El email ya esta registrado");
    }

    const userNuevo = {
      nombre,
      apellidos,
      email,
      password: bcrypt.hashSync(password, 11),
      avatar,
      rol,
    };
    const sql = "INSERT INTO usuario SET ?";
    const [rows] = await db.query(sql, [userNuevo]);
    return rows;
  },
  update: async (data, id) => {
    const { nombre, apellidos, email, password, avatar, rol } = data;
    console.log(email);
    const [existeEmail] = await db.query(
      "SELECT * FROM usuario WHERE id != ? AND email = ?",
      [id, email],
    );
    if (existeEmail.length > 0) {
      throw new Error("El email ya esta registrado");
    }

    const [[userBD]] = await db.query("SELECT * FROM usuario WHERE id = ?", [id]);

    const userUpdated = {
      nombre,
      apellidos,
      email,
      avatar,
      rol,
    };
    console.log(userBD)
    if (!bcrypt.compare(password, userBD.password)) {
      userUpdated.password = bcrypt.hashSync(password, 11);
    }

    const sql = "UPDATE usuario SET ? WHERE id = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM usuario WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
};
