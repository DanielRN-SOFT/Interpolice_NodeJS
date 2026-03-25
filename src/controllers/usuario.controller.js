import { UsuarioModel } from "../models/usuario.model.js";

export const getUsuarios = async (req, res) => {
  try {
    const results = await UsuarioModel.findAll();
    res.json({ results });
  } catch (error) {
    console.log(error);
  }
};
export const getUsuarioById = async (req, res) => {
  try {
    const results = await UsuarioModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    console.log(error);
  }
};

export const createUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.create(req.body);
    res.json({ results });
  } catch (error) {
    console.log(error);
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.update(req.body, req.params.id);
    res.json({ results });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    console.log(error);
  }
};