let num = document.querySelector('input#inum')
let sel = document.querySelector('select#sel')
let valores = []

function adicionar() {
if (num.value.length == 0) {
    window.alert('Adicione algum número!')
} else {
    valores.push(Number(num.value))
    for(let pos of valores) {
    let item = document.createElement('option')
    item.textContent = `Valor ${valores} adicionado.`
    sel.appendChild(item)
    }
 }
}

function finalizar() {
    if(valores.length == 0)
}