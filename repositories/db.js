import pg from "pg";

const connect = async () => {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://akyoeoly:uDvODXzHiblyoyM6979EmTAuIMpsUeUv@suleiman.db.elephantsql.com/akyoeoly",
  });
  global.connection = pool;

  return pool.connect();
};

export default {
  connect,
};
