import pg from "pg";

const connect = async () => {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://xblovfue:yZwIUrX5imC80skXxnF2_arHRavxMptm@raja.db.elephantsql.com/xblovfue",
  });
  global.connection = pool;

  return pool.connect();
};

export default {
  connect,
};
