const pessoa = {
    _nome: "",
    set nome(novoNome) {
      this._nome = novoNome
    }
  }

  pessoa.nome = "Maria"; // Define a propriedade "nome" através do setter
  console.log(pessoa.nome); // Acessa a propriedade "nome" através do getter
  const pessoa = {
    _nome: "",
    set nome(novoNome) {
      this._nome = novoNome;
    }
  }
  pessoa.nome = "Maria" // Define a propriedade "nome" através do setter
  console.log(pessoa.nome) // Acessa a propriedade "nome" através do getter
