import db from "./db.js";

const insertAnimal = async (animal) => {
  const conn = await db.connect();
  try {
    const sql =
      "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [animal.nome, animal.tipo, animal.proprietario_id];

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getAnimais = async () => {
  const conn = await db.connect();
  try {
    const res = await conn.query("SELECT * FROM animais");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getAnimaisByProprietarioId = async (proprietarioId) => {
  const conn = await db.connect();
  try {
    const res = await conn.query(
      "SELECT * FROM animais WHERE proprietario_id = $1",
      [proprietarioId]
    );
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getAnimal = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query("SELECT * FROM animais WHERE animal_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateAnimal = async (animal) => {
  const conn = await db.connect();
  try {
    const sql =
      "UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *";
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.animal_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteAnimal = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query("DELETE FROM animais WHERE animal_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

export default {
  insertAnimal,
  getAnimais,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimaisByProprietarioId,
};
