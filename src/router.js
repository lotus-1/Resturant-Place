const {
  handlerHome,
  getUsersHandler,
  postUserHandler,
  publicHandler,
  errorHandler
} = require('./handler');

const router = (request, response) => {
  const { url } = request;
  if (url === '/') {
    handler.handlerHome(response);
    
  }  else if (url.includes('public')) {
    handler.publicHandler(url, response);
  } else {
    handler.errorHandler(response);
  }
};

module.exports = router;
