function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById(`img`)  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>= 0 && hora < 12) {
     img.src = 'imagens/manha.png'
     document.body.style.background = '#218e00'//Para mudar a cor de fundo
    } else if (hora <= 18) {
       img.src = 'imagens/tarde.png' //Para adicionar uma imagem
       document.body.style.background = '#fa8b46'
    } else {
       img.src = 'imagens/noite.png'
       document.body.style.background = '#000e64'
    }
}

