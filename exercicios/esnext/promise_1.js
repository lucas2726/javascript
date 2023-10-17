let a = 1
console.log(a)

const primeiroElemento = string => string[0]
const primeiroLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

.then(primeiroElemento)
.then(primeiroLetra)
.then(letraMinuscula)
.then(console.log)