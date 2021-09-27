require("dotenv").config();
const env = process.env;

const config = {
  database: {
    dbDSN: env.DB_DSN ? env.DB_DSN : "mongodb://localhost:27017",
    dbName: env.DB_NAME ? env.DB_NAME : "blys"
  },
};

module.exports = config;
