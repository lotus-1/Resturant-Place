const databaseConnection = require('../database/db_connection.js');

const getUser = (cb) => {
  databaseConnection.query('SELECT * FROM restaurant', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getUser;
