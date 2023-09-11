var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora} horas`)
if (hora >= 0 && hora < 6) {
    console.log(`Bom madrugada!`)
} else if (hora < 12) {
    console.log(`Boa dia!`)
} else if (hora <= 18){
    console.log(`Boa tarde!`)
} else {
    console.log('Boa noite!')
}
/*
else if == else {
    if{

    }
}
else if economiza linhas
*/