const souUmDado = function() {
    console.log('Sou um dado')
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo')
    funcao()
}

executaFuncao(souUmDado)