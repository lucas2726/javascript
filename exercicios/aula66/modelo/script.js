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

function criaBotaoApagar(li) { /* Criar um botão apagar */
    li.innerHTML += ' ' //Para dar um espaço
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) /*textoInput recebe o valor criaTarefa.value*/ {
   const li = criaLi() //Para  criar a função criaLi
   li.innerHTML = textoInput 
   tarefas.appendChild(li) /*Para dizer que li é filho de tarefas*/
   limpaInput()
   criaBotaoApagar(li)
   salvarTarefas()
}

btnTarefa.addEventListener('click', function(event) {
    if (!inputTarefa.value) return /*Para não poder deixar a caixa de texto vazia*/
    criaTarefa(inputTarefa.value)/*Para criar uma function com o valor de inputTarefa*/
})

document.addEventListener('click', function(event) {
    const el = event.target
    /*Para criar uma função de quando um botão for clicado*/
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        /* Para quando o botão 'apagar' for clicado ele apagar a caixa de texto*/
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = salvarTarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
          let tarefasTexto = tarefa.innerText
          tarefasTexto = tarefasTexto.replace('apagar', '') //Para substituir o apagar por nada 
          listaDeTarefas.push(tarefasTexto) //conecta com o array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas) //converte para o uma string
    localStorage.setItem('Tarefas', tarefasJSON) //Armazena a string
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas') //Para armazenar em tarefas
    const listaDeTarefas = JSON.parse(tarefas) //converte dnv para um array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()