const formData = new FormData();

// Adicionando dados ao objeto FormData usando append()
formData.append('nome', 'João');
formData.append('email', 'joao@example.com');

// Enviando o objeto FormData via fetch
fetch('https://api.exemplo.com/salvar', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log(data); // Manipula a resposta do servidor
})
.catch(error => {
  console.error('Erro:', error); // Trata erros de requisição
})

















































  


  


 
 
 

  