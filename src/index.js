const express = require('express');
require('express-async-errors'); // necessário para o middleware de error funcionar no async

const routes = require('./routes');

const app = express();

app.use(express.json()); // Middleware para transformar o body para receber informações
app.use(routes); // Middleware
app.use((error, request, response, next) => { // middleware para erros: express já identifica que está função é um error handler -> manipulador de erros
  console.log('### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
