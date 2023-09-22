//Closure é o escopo criado quando uma funcao é declarada
//Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto eéxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())