/*setTimeout(function() {
  console.log('Executando...')
   setTimeout(function() {
    console.log('Executando...')
     setTimeout(function() {
        console.log('Executando...')
      }, 2000)
   }, 2000)
}, 2000)*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise')
            resolve('Vishhh')
        
        }, tempo)
    })
}

esperarPor()
.then(()=> esperarPor())
.then(esperarPor)