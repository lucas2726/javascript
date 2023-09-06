function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    /* conecta o caixa número com a resposta */

    if (num.value.length == 0) { /*Para caso não coloque nada emita uma mensagem de alerta*/
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //Para limpar a caixa de texto
        while (c <= 10) /*Para ir de 1 até 10 */ {
            var item = document.createElement('option') //Para conectar com o option do html
            item.text = `${n} x ${c} = ${n*c}` //Para fazer a conta de multiplicação
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } 
}  


