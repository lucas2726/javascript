function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    /* conecta o caixa número com a resposta */

    if (num.value.length == 0) { /*Para caso não coloque nada emita uma mensagem de alerta*/
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1 //Para começar com o número 1
        tab.innerHTML = '' //Para limpar a caixa de texto
        while (c <= 10) /*Para ir de 1 até 10 */ {
            var item = document.createElement('option') //Usado para criar um novo elemento
            item.text = `${n} x ${c} = ${n*c}` //Usado para definir o conteúdo desse elemento
            item.value = `tab${c}`
            tab.appendChild(item) //Usado para adicionar o conteúdo dentro do corpo do documento
            c++
        }
    } 
}  


