// const handler = require('./handler');
//const router = (request, response) => {
//   const { url } = request;
// console.log(url);
//   if (url === '/') {
//     handler.handlerHome(request, response);
//   } else if (url === '/users') {
//
//     handler.publicHandler(url, response);
//   } else {
//     response.writeHead(404, { 'Content-Type': 'text/html' });
//     response.end('<h1> 404 not found </h1>');
//   }
// };
// module.exports = router;
const {
  handlerHome,
  publicHandler,
  errorHandler
} = require('./handler');

const router = (request, response) => {
  const { url } = request;
  //console.log(url);
  if (url === '/') {
    handlerHome(response);
  }  else if (url.includes('public')) {
    publicHandler(url, response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
