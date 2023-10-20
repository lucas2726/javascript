const {texto, arquivos} = require('./base')

/*console.log(texto)
const regExp = /joão|Maria/gi
console.log(texto.match(regExp))
*/

//const regExp = /jo+ão+|Maria/gi
//const regExp2 = /\.jpe?g/gi
//const regExp2 = /\.jpe{1,}g/gi
const regExp2 = /\.(jp|JP)(e|E)?(g|G)/g

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2)

  //if (!valido) continue

  console.log(arquivo, valido)
}


