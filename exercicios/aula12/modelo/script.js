
function verificar() {
    let idade = document.querySelector('input#idade')
    let res = document.querySelector('div#res')
    ida = Number(idade.value)
if (ida < 16) {
    res.innerHTML = 'Não vota'
} else if (ida < 18 || ida > 65) {
    res.innerHTML = 'Voto opicional'
} else {
    res.innerHTML = 'Voto obrigatório'
}
}



