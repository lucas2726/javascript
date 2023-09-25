// Objeto pai (protótipo)
var animal = {
    speak: function() {
      console.log("O animal faz um som.");
    }
  };
  
  // Objeto filho que herda do objeto pai
  var gato = Object.create(animal);
  
  // Agora, o objeto gato tem acesso ao método speak do objeto animal
  gato.speak(); // Isso imprimirá "O animal faz um som."
  








