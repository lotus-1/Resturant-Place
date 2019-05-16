// const url = require('url');
// // require('dotenv').config();
// const { Pool } = require('pg');
//
// const params = url.parse(process.env.DB_URL);
// const [username, password] = params.auth.split(':');
// const options = {
//   host: params.hostname,
//   port: params.port,
//   database: params.pathname.split('/')[1],
//   max:process.env.DB_URL_CONNECTIONS ||2,
//   user: username,
//   password,
//   ssl: params.hostname !== 'localhost'
// };
//
// module.exports = new pool(options);
