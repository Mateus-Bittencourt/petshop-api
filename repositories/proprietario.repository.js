import db from "./db.js";

const insertProprietario = async (proprietario) => {
  try {
    const conn = await db.connect();
    const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2)";
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
  try {
    const conn = await db.connect();
    const res = await conn.query("SELECT * FROM proprietarios");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getProprietario = async (id) => {
  try {
    const conn = await db.connect();
    const res = await conn.sql(
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
  try {
    const conn = await db.connect();
    const sql =
      "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3";
    const values = [proprietario.nome, proprietario.telefone, proprietario.id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteProprietario = async (id) => {
  try {
    const conn = await db.connect();
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
