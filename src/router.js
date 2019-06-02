const {
   handlerHome,
   handlerPublic,
   getUserHandler,
   postUserHandler,
   errorHandler } = require('./handler');

const router = (request, response) => {
   const url = request.url;

  if (url === '/') {
    handlerHome(response);
  // } else if (url.includes('/public')) {
  //   handlerPublic(response, url);
  } else if (url === '/getUser') {
    getUserHandler(response);
  } else if (url === '/postUser') {
    postUserHandler(response);
  } else {
    errorHandler(response);
}
};


module.exports = router;
