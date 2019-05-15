const { readFile } = require('fs');
const path = require('path');
const qs = require('qs');

const handler = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    const filePath = path.join(__dirname, "..", "public", "index/html");
    fs.readFile(filePath, (error, file) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    });
    }


    module.exports = handler;
