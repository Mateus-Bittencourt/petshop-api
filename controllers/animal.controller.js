import AnimalService from "../services/animal.service.js";

const createAnimal = async (req, res, next) => {
  try {
    const animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Nome, Tipo e proprietario_id são obrigatórios");
    }
    res.status(201).send(await AnimalService.createAnimal(animal));
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (error) {
    next(error);
  }
};

const getAnimais = async (req, res, next) => {
  try {
    res.send(await AnimalService.getAnimais(req.query.proprietario_id));
    logger.info("GET /animal");
  } catch (error) {
    next(error);
  }
};

const getAnimal = async (req, res, next) => {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info(`GET /animal/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const deleteAnimal = async (req, res, next) => {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.status(204).end();

    logger.info(`DELETE /animal/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const updateAnimal = async (req, res, next) => {
  try {
    const animal = req.body;
    if (
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id ||
      !animal.animal_id
    ) {
      throw new Error(
        "Nome, Tipo, proprietario_id e animal_id são obrigatórios"
      );
    }
    res.send(await AnimalService.updateAnimal(animal));
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
