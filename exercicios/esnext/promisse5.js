function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
       try {
        con.log('temp')
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    } catch(e) {
        reject(e)
    }
    })
}

funcionarOuNao('Testando...', 0.1)
.then(v => console.log(`Valor: ${v}`))
.catch(err => console.log(`Erro ${err}`))
.then(() => console.log('Fim!'))