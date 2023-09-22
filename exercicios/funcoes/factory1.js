function criarPessoa(nome, idade) {
    // Cria um novo objeto pessoa com as propriedades fornecidas
    const pessoa = {
      nome: nome,
      idade: idade,
      saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
      }
    }
    return pessoa // Retorna o objeto pessoa
  }
  
  // Usando a função factory para criar duas instâncias de pessoa
  const pessoa1 = criarPessoa("Alice", 30);
  const pessoa2 = criarPessoa("Bob", 25);
  
  pessoa1.saudacao()
  pessoa2.saudacao()
  