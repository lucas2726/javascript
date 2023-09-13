
function tabuada() {
    let num = document.querySelector('input#txtn')
    let seltab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) 
        seltab.innerHTML = ''
       for(c = 1;c <= 10; c++) {
        let item = document.createElement('option') /*Usado para criar um novo elemento*/
        item.textContent = `${n} x ${c} = ${n*c}` /*Usado para definir o conteúdo desse elemento*/
        item.value = `tab${c}` //Para js não tem muita ultiliddae mas sim para outras linguagens
        seltab.appendChild(item) /*Usado para adicionar o conteúdo dentro do corpo do documento*/
       }
    }
}