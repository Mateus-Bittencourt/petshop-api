import db from "./db.js";

const insertProprietario = async (proprietario) => {
  const conn = await db.connect();
  try {
    const sql =
      "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *";
    const values = [proprietario.nome, proprietario.telefone];

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getProprietarios = async () => {
  const conn = await db.connect();
  try {
    const res = await conn.query("SELECT * FROM proprietarios");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getProprietario = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query(
      "SELECT * FROM proprietarios WHERE proprietario_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateProprietario = async (proprietario) => {
  const conn = await db.connect();
  try {
    const sql =
      "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *";
    const values = [
      proprietario.nome,
      proprietario.telefone,
      proprietario.proprietario_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteProprietario = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query(
      "DELETE FROM proprietarios WHERE proprietario_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

export default {
  insertProprietario,
  getProprietarios,
  getProprietario,
  updateProprietario,
  deleteProprietario,
};
