// Middleware de Logging
function loggingMiddleware(req, res, next) {
  // Registra os detalhes da solicitação
  console.log(`Método: ${req.method}, URL: ${req.url}`);
  // Chama o próximo middleware na cadeia ou o controlador final
  next();
}

// Uso do middleware de logging em uma rota específica
app.use('/rota-especifica', loggingMiddleware);








   




















  


  








