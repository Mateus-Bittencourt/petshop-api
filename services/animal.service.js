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
  if (proprietarioId) {
    const animais = await AnimalRepository.getAnimaisByProprietarioId(
      proprietarioId
    );
    const proprietario = await ProprietarioRepository.getProprietario(
      proprietarioId
    );
    return {
      proprietario,
      aniamis: [...animais],
    };
  }
  return await AnimalRepository.getAnimais();
};

const getAnimal = async (id) => {
  const animal = await AnimalRepository.getAnimal(id);
  if (!animal) throw new Error("Animal não encontrado");
  const proprietario = await ProprietarioRepository.getProprietarioByAnimalId(
    animal.animal_id
  );
  return {
    animal_id: animal.animal_id,
    nome: animal.nome,
    tipo: animal.tipo,
    proprietario: {
      ...proprietario,
    },
  };
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
