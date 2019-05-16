const databaseConnection = require('../database/db_connection.js');

const postUser = (name, location, cb) => {
  databaseConnection.query(
    'INSERT INTO saraman (name, location) VALUES ($1, $2)',
    [name, location],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postUser;
