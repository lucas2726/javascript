fetch('https://api.example.com/data')
  .then(function(response) {
    return response.json(); // Converte a resposta em formato JSON
  })
  .then(function(data) {
    console.log(data); // Faça algo com os dados recebidos, por exemplo, atualizar a interface do usuário.
  })
  .catch(function(error) {
    console.error('Erro na requisição:', error); // Trata erros de rede ou outras falhas
  });











  


  


 
 
 

  