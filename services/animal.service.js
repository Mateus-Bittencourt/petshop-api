import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js";

const createAnimal = async (animal) => {
  const proprietario = await ProprietarioRepository.getProprietario(
    animal.proprietario_id
  );
  if (!proprietario) throw new Error("Proprietário não encontrado");
  return await AnimalRepository.insertAnimal(animal);
};

const getAnimais = async (proprietarioId) => {
  if (proprietarioId)
    return await AnimalRepository.getAnimaisByProprietarioId(proprietarioId);
  return await AnimalRepository.getAnimais();
};

const getAnimal = async (id) => {
  const animal = await AnimalRepository.getAnimal(id);
  if (!animal) throw new Error("Animal não encontrado");
  return animal;
};

const deleteAnimal = async (id) => {
  const animal = await AnimalRepository.getAnimal(id);
  if (!animal) throw new Error("Animal não encontrado");

  return await AnimalRepository.deleteAnimal(id);
};

const updateAnimal = async (animal) => {
  const current_animal = await AnimalRepository.getAnimal(animal.animal_id);
  if (!current_animal) throw new Error("Animal não encontrado");
  const proprietario = await ProprietarioRepository.getProprietario(
    animal.proprietario_id
  );
  if (!proprietario) throw new Error("Proprietário não encontrado");
  return await AnimalRepository.updateAnimal(animal);
};

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
