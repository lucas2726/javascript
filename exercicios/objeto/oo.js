class Veiculo {
    constructor(marca) {
      this.marca = marca;
    }
  
    exibirMarca() {
      console.log(`Marca: ${this.marca}`);
    }
  }
  class Carro extends Veiculo {
    constructor(marca, modelo) {
      super(marca);
      this.modelo = modelo;
    }
    exibirInformacoes() {
      console.log(`Este é um ${this.marca} ${this.modelo}`);
    }
  }
  const meuCarro = new Carro('Toyota', 'Corolla');
  meuCarro.exibirMarca(); // Saída: Marca: Toyota
  meuCarro.exibirInformacoes(); // Saída: Este é um Toyota Corolla
  












































  


  


 
 
 

  