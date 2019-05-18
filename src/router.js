const {
   handlerHome,
   // handlerPublic,
   handlerGetUser,
   handlerPostUser,
   errorHandler } = require('./handler');

const router = (request, response) => {
   const { url } = request;

  if (url === '/') {
    handlerHome(response);
  // } else if (url.includes('/public')) {
  //   handlerPublic(response, url);
  } else if (url === '/getUser') {
    handlerGetUser(response);
  } else if (url === '/postUser') {
    handlerPostUser(response);
  } else {
    errorHandler(response);
}
};


module.exports = router;
