const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario: {
      nome:'Raul',
      idade: 56,
      endereco: {
        logradouro: 'Rua ABC',
        numero: 123
      }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }, {
        calcularValorSeguro: function() {
            //...
        }
    }]

}

carro.proprietario.endereco.numero = 1000 //Formas para atribuir um novo valor
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
delete carro.condutores
  console.log(carro)
  

  