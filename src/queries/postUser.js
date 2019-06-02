const databaseConnection = require('../database/db_connection.js');
const bcrypt = require('bcryptjs')

const postUser = (name, location, business_owner, type_of_restaurant, cb) => {
  databaseConnection.query(
    'INSERT INTO restaurant (name, location, business_owner, type_of_restaurant) VALUES ($1, $2, $3, $4)',
    [name, location, business_owner, type_of_restaurant],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res, 'INSERT INTO customers (first_name, last_name, working, location) VALUES ($1, $2, $3, $4)',
        [first_name, last_name, working, location]
      );
    };
});
};

const postData = (email, password, cb) => {
  database.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password],
(err, res) => {
  if (err) {
    return (err);
  } else {
    cb (null, res);
  }
}
);
};

module.exports = {
  postUser,
  postData
}
// 'INSERT INTO customers (first_name, last_name, working, location) VALUES ($1, $2)',
// [first_name, last_name, working, location],
