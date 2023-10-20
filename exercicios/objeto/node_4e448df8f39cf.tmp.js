var texto = "Olá, meu número de telefone é 123-456-7890.";
var padrao = /(\d{3})-(\d{3})-(\d{4})/;
var resultado = padrao.exec(texto);

console.log(resultado); // Saída: ["123-456-7890", "123", "456", "7890"]
console.log(resultado[0]); // Saída: "123-456-7890" (correspondência completa)
console.log(resultado[1]); // Saída: "123" (primeiro grupo de captura)
console.log(resultado[2]); // Saída: "456" (segundo grupo de captura)
console.log(resultado[3]); // Saída: "7890" (terceiro grupo de captura)





































  


  


 
 
 

  