import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AniamalRepository from "../repositories/animal.repository.js";

const createProprietario = async (proprietario) => {
  return await ProprietarioRepository.insertProprietario(proprietario);
};

const getProprietarios = async () => {
  return await ProprietarioRepository.getProprietarios();
};

const getProprietario = async (id) => {
  return await ProprietarioRepository.getProprietario(id);
};

const deleteProprietario = async (id) => {
  const animais = await AniamalRepository.getAnimaisByProprietarioId(id);
  if (animais.length > 0) {
    throw new Error(
      "Não é possível excluir um proprietário que possui animais cadastrados"
    );
  }
  return await ProprietarioRepository.deleteProprietario(id);
};

const updateProprietario = async (proprietario) => {
  return await ProprietarioRepository.updateProprietario(proprietario);
};

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
