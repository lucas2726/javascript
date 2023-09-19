const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa= document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
    /*Para criar um elemento li e retornar ele*/
}

inputTarefa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if (!inputTarefa.value) return 
        criaTarefa(inputTarefa.value)
    }
    /*Para criar a opção de quando for pressionada a tecla enter o texto é adicionado automaticamente*/
}) 

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaTarefa(textoInput) /*textoInput recebe o valor criaTarefa.value*/ {
   const li = criaLi() //Para  criar a função criaLi
   li.innerHTML = textoInput 
   tarefas.appendChild(li) /*Para dizer que li é filho de tarefas*/
   limpaInput()
}

btnTarefa.addEventListener('click', function(event) {
    if (!inputTarefa.value) return /*Para não poder deixar a caixa de texto vazia*/
    criaTarefa(inputTarefa.value)/*Para criar uma function com o valor de inputTarefa*/
})