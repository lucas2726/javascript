let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')

function adicionar() {
    if (num.value.length == 0 || num.value > 100) {
      window.alert('Valor inválido ou já encontrado na lista')
    } else {
      let n = Number(num.value)
      let item = document.createElement('option')
      item.text = `Valor ${n} adicionado`
      tab.appendChild(item)
    }
}

function finalizar() {
  if (num.value.length == 0) {
    window.alert('Adicione valores antes de começar')
  } else {
    res.innerHTML = `Ao todo, temos  números cadastrados.  <br>
    O maior valor informado foi <br>
    O menor valor informado foi  <br>
    Somando todos os valores, temos  <br>
    A média dos valores digitados é `  
  }
}


