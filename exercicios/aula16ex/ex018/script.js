let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] /*`valores`: É um array vazio que será usado para armazenar os números digitados pelo usuário. */

function isNumero(n) {
    /*`isNumero(n)`: Verifica se um número (representado por `n`) está dentro do intervalo de 1 a 100. Retorna `true` se estiver e `false` caso contrário. */
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    /* Se `l.indexOf(Number(n))` não for igual a `-1`, isso significa que o valor `n` foi encontrado na lista `l`, e a função `inLista` retorna `true`. Caso contrário, se o valor não for encontrado, a função retorna `false`.
   Em resumo, a função `inLista` verifica se um valor `n` está presente em uma lista `l` (representada como um array) e retorna `true` se estiver presente ou `false` se não estiver. É uma função útil para evitar que valores duplicados sejam adicionados à lista `valores`.*/
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    /* - Verifica se o valor digitado no elemento `num` é um número válido usando `isNumero` e se não está na lista `valores` usando `inLista`.
    - Se for válido, o número é adicionado ao array `valores` e uma opção é criada e adicionada ao elemento `lista`.
    - isNumero e inLista ganha o seu valor aqui
    - A div `res` é limpa.
    - Caso contrário, exibe um alerta informando que o valor é inválido ou já está na lista.*/
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    /*   - Verifica se há valores no array `valores`.
- Se houver, calcula estatísticas como o total de valores, o maior, o menor, a soma e a média.
- Exibe essas estatísticas dentro do elemento `res`. */
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
