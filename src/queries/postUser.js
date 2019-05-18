const databaseConnection = require('../database/db_connection.js');

const postUser = (name, location, business_owner, type_of_restaurant, cb) => {
  databaseConnection.query(
    'INSERT INTO restaurant (name, location, business_owner, type_of_restaurant) VALUES ($1, $2)',
    [name, location, business_owner, type_of_restaurant],
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
