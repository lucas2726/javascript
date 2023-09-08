let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
   if (Number(n) >= 1 && Number(n) <= 100) {
    return true
   } else {
    return false
   }  
} 

function inLista(n, l) {
   if (l.indexOf(Number(n)) != -1) {
    return true
   } else {
    return false
   }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado.`
      lista.appendChild(item)
      num.value = '' //Para esvaziar a caixa toda
   } else {
       window.alert('Valor inválido ou já encontrado na lista.')
  }
  num.value = '' //Para esvaziar a caixa do número
  num.focus() /*Para o cursos ficar piscando para adicionar outro número sem tocar denovo*/
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar.')
  } else {
    let tot = valores.length /*Para dizer a quantidade de números dentro da lista*/
    let maior = valores[0]
    let menor = valores[0]
    for (let pos in valores) {
      if (valores[pos] > maior)
      maior = valores[pos]
      if (valores[pos] < menor)
          menor = valores[pos]
    }
    res.innerHTML = '' //Para esvaziar a caixa do res
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados<p>`
    res.innerHTML += `<p>O maior valor informado foi ${}<p>`
    res.innerHTML += `<p><p>`
    res.innerHTML += `<p><p>`
  }
}

