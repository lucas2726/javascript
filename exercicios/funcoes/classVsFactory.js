class Pessoa {
    construtor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Lucas')
p1.falar()

//-------------
function Pessoa(nome) {
  this.nome = nome
  this.falar = function() {
     console.log(`Meu nome é ${this.nome}`)
  }
}

const pessoa1 = new Pessoa('Lucas')
pessoa1.falar()
