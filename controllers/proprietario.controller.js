import ProprietarioService from "../services/proprietario.service.js";

const createProprietario = async (req, res, next) => {
  try {
    const proprietario = req.body;
    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error("Nome e Telefone são obrigatórios");
    }
    res
      .status(201)
      .send(await ProprietarioService.createProprietario(proprietario));
    logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (error) {
    next(error);
  }
};

const getProprietarios = async (req, res, next) => {
  try {
    res.send(await ProprietarioService.getProprietarios());
    logger.info("GET /proprietario");
  } catch (error) {
    next(error);
  }
};

const getProprietario = async (req, res, next) => {
  try {
    res.send(await ProprietarioService.getProprietario(req.params.id));
    logger.info(`GET /proprietario/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const deleteProprietario = async (req, res, next) => {
  try {
    await ProprietarioService.deleteProprietario(req.params.id);
    res.status(204).end();

    logger.info(`DELETE /proprietario/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const updateProprietario = async (req, res, next) => {
  try {
    const proprietario = req.body;
    if (
      !proprietario.nome ||
      !proprietario.telefone ||
      !proprietario.proprietario_id
    ) {
      throw new Error("Nome, Telefone e proprietario_id são obrigatórios");
    }
    res.send(await ProprietarioService.updateProprietario(proprietario));
    logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
