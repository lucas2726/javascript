const {lookahead} = require('./base')

console.log(lookahead)

//Positivo lookahead
console.log(lookahead.match(/.+(?=[^in]active)/gim))

//negativo lookahead
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

//Positivo lookahead
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

//negativo lookahead
console.log(lookahead.match(/^.+(?<!=ONLINE.+)$/gim))





