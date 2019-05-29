const databaseConnection = require('../database/db_connection.js');

const postUser = (name, location, business_owner, type_of_restaurant, cb) => {
  databaseConnection.query(
    'INSERT INTO restaurant (name, location, business_owner, type_of_restaurant) VALUES ($1, $2)',
    // [name, location, business_owner, type_of_restaurant],
    // 'INSERT INTO customers (first_name, last_name, working, location) VALUES ($1, $2)',
    [first_name, last_name, working, location],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    });
};


module.exports = postUser;
