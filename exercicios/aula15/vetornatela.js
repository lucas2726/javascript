let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}







/*
 console.log(valores[0]) //mostra um de cada vez / modo péssimo 
 console.log(valores[1])
 console.log(valores[2])
 console.log(valores[3])
 console.log(valores[4])
 console.log(valores[5])

for(let pos=0; pos < valores.length; pos++) { //modo um pouco melhor
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//console.log(valores) mostra todo o array / modo ruim
*/