const pessoa = { 
    nome:'Lucas',
    sobrenome:'Bueno',
    idade:'19',
    endereço:{
        rua:'AV Brasil',
        numero:'610'
    }
}

//Atribuição via desestruturação
const {nome, ...resto} = pessoa /*A desestruturação puxa para fora as tags dentro de pessoa*/ 
console.log(nome,resto) //Resto mostra o restante do objeto