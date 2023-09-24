const pessoa = {
    nome: "João",
    idade: 30
  }
  
  // Congela o objeto pessoa
  Object.freeze(pessoa)
  
  // Tentar modificar uma propriedade existente não terá efeito
  pessoa.nome = "Maria" // Isso não vai alterar o nome para "Maria"
  
  // Tentar adicionar uma nova propriedade não terá efeito
  pessoa.endereco = "123 Rua Principal" // Isso não vai adicionar uma nova propriedade
  
  // Tentar excluir uma propriedade existente não terá efeito
  delete pessoa.idade // Isso não vai excluir a propriedade idade
  
  console.log(pessoa) // Ainda terá as propriedades originais: { nome: 'João', idade: 30 }
  