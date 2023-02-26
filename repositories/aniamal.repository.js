import db from "./db.js";

const insertAnimal = async (animal) => {
  try {
    const conn = await db.connect();
    const sql =
      "INSERT INTO animals (nome, tipo, proprietario_id) VALUES ($1, $2, $3)";
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
  try {
    const conn = await db.connect();
    const res = await conn.query("SELECT * FROM animals");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getAnimal = async (id) => {
  try {
    const conn = await db.connect();
    const res = await conn.sql("SELECT * FROM animals WHERE animal_id = $1", [
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
  try {
    const conn = await db.connect();
    const sql =
      "UPDATE animals SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4";
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.id,
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
  try {
    const conn = await db.connect();
    const res = await conn.query("DELETE FROM animals WHERE animal_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};
