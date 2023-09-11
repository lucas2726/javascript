function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //Para colocar o ano inteiro
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
         if (idade >= 0 && idade <10) {
           img.setAttribute('src', 'imagens/1.png') /*Para colocar a imagem*/
         } else if (idade < 21) {
           img.setAttribute('src', 'imagens/2.png')
         } else if (idade < 50 ) {
           img.setAttribute('src', 'imagens/3.png')
         } else {
           img.setAttribute('src', 'imagens/4.png')
         }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
          if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/5.png')
          } else if (idade < 21) {
            img.setAttribute('src', 'imagens/6.png')
          } else if (idade < 50) {
            img.setAttribute('src', 'imagens/7.png')
          } else {
            img.setAttribute('src', 'imagens/8.png')
          }
       }
       res.style.textAlign = 'center'/* Para centralizar usando js */
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img) //Para aparecer a imagem
    }
}