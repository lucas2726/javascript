const {texto} = require('./base')
const regExp = /joão/gi

console.log(texto)
console.log(texto.match(regExp))
console.log(texto.replace(/joão/gi, 'Felipe'))
console.log(texto.replace(/(joão|Maria)/gi, '<b>$1<b>'))
console.log(texto.replace(/joão|Maria/gi, function() {
   return '####' + input.toUpperCase() + '####'
}))