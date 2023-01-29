module.exports = (error, request, response, next) => { // middleware para erros: express já identifica que está função é um error handler -> manipulador de erros
  console.log('### Error Handler');
  console.log(error);
  response.sendStatus(500);
}
