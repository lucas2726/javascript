let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posicões`)
console.log(`O primeiro valor do vetor ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 estána posição ${pos}`)
}
