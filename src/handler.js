// const { readFile } = require('fs');
// const path = require('path');
// const fs = require('fs');
// const querystring = require('querystring');
//
// const getUser = require('./queries/getUser.js');
// const postUser = require('./queries/postUser.js');
//
// const serverError = (err, response) => {
//   response.writeHead(500, "Content-Type:text/html");
//   response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
//   console.log(err)
// };
//
// const handlerHome = response => {
//   const filePath = path.join(__dirname, '..', 'public', 'index.html');
//    readFile(filePath, (error, file) => {
//     if (error) return serverError (error, response);
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.end(file);
//     });
// }
//
// const handlerPublic = (url, response) => {
//   const filepath = path.join(__dirname, '..', url);
//   readFile(filepath, (err, file) => {
//     if (err) return serverError(err, response);
//     const [, extension] = url.split('.');
//     const extensionType = {
//       html: 'text/html',
//       css: 'text/css',
//       js: 'application/javascript'
//     };
//     response.writeHead(200, { 'content-type': extensionType[extension] });
//     response.end(file);
//   });
// };
//
// const handlerGetUser = response => {
//     getUser((err, restaurant) => {
//       if (err) return serverError(err, response);
//       response.writeHead(200, { 'Content-Type': 'application/json' });
//       response.end(JSON.stringify(restaurant));
//     });
// };
//
// const handlerPostUser = (request, response) => {
//   let data = '';
//   request.on('data', chunk => {
//     data += chunk;
//   });
//   request.on('end', () => {
//     // const resultData = qs.parse(data);
//     const name = qs.parse(data).name;
//     const location = qs.parse(data).location;
//     const business_owner = qs.parse(data).business_owner;
//     const type_of_restaurant = qs.parse(data).type_of_restaurant;
//     postUser(name, location, business_owner, type_of_restaurant, err => {
//       if (err) return serverError(err, response);
//       response.writeHead(302, { 'Location': '/' });
//       response.end();
//     });
//   });
// }
// const errorHandler = response => {
//   response.writeHead(404, { 'content-type': 'text/html' });
//   response.end('<h1>404 Page Requested Cannot be Found</h1>');
// };
//
// module.exports = {
//   handlerHome,
//   handlerPublic,
//   handlerGetUser,
//   handlerPostUser,
//   errorHandler
// }

const { readFile } = require("fs");
const path = require("path");
const qs = require("qs");

const getUser = require("./queries/getUser.js");
const postUser = require("./queries/postUser.js");

const serverError = (err, response) => {
  response.writeHead(500, "Content-Type:text/html");
  response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
  console.log(err);
}


const handlerHome = response => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(file);
  });
};

const getUsersHandler = response => {
  getData((err, users) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(restaurant));
  });
};

const postUserHandler = (request, response) => {
  let data = '';
  request.on('data', chunk => {
    data += chunk;
  });
  request.on('end', () => {
    const { name, location } = qs.parse(data);
    postUser(name, location, err => {
      if (err) return serverError(err, response);
      response.writeHead(302, { 'Location': '/' });
      response.end()
    });
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, '..', url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split('.');
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript'
    };
    response.writeHead(200, { 'content-type': extensionType[extension] });
    response.end(file);
  });
};

const errorHandler = response => {
  response.writeHead(404, { 'content-type': 'text/html' });
  response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
  handlerHome,
  getUsersHandler,
  postUserHandler,
  publicHandler,
  errorHandler
};
