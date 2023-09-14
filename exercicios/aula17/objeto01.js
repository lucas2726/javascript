let amigo = {nome: 'josé', sexo: 'M', peso: 85.4, engordar(p=0){
console.log('engordou') //Se tiver mais que 0 a fuction engordar será ativada
this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

