require('dotenv').config();

module.exports = {
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT || 3308,
    database: process.env.DB_NAME,
  },
};
