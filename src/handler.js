const { readFile } = require("fs");
const path = require("path");
const qs = require("qs");

const getUser = require("./queries/getUser.js");
const postUser = require("./queries/postUser.js");

const serverError = (err, response) => {
  response.writeHead(500, "Content-Type:text/html");
  response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
  console.log(err);
};

const handlerHome = response => {
  const filepath = path.join(__dirname, "..", "public", "index.html");
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const getUserHandler = response => {
  getData((err, restaurant) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(restaurant));
  });
};

const postUserHandler = (request, response) => {
  let data = "";
  request.on("data", chunk => {
    data += chunk;
  });
  request.on("end", () => {
    const { name, location } = qs.parse(data);
    postUser(name, location, err => {
      if (err) return serverError(err, response);
      response.writeHead(302, { Location: "/" });
      response.end();
    });
  });
};

const handlerPublic = (response, url) => {
console.log("this is an url " , url);
  const filepath = path.join(__dirname, "..", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split(".");
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript"
    };
    response.writeHead(200, { "content-type": extensionType[extension] });
    response.end(file);
  });
};

const errorHandler = response => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Page Requested Cannot be Found</h1>");
};

module.exports = {
  handlerHome,
  getUserHandler,
  postUserHandler,
  handlerPublic,
  errorHandler
};
