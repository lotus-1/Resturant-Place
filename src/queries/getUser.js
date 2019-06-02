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

const getUserData = (cb) => {
  databaseConnection.query('SELECT * FROM customers', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
const getData = (cb) => {
  database.query('SELECT * FROM users WHERE email=$1 and password=$2, [email, password]', (err, res) => {
    if (err){
      cb(err) 
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = {
   getUser,
   getUserData,
   getData
 };
