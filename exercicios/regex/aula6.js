const {CPFs, ips, alfabeto, html, texto, arquivos} = require('./base')

//console.log(CPFs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g))
//console.log(CPFs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g))
console.log(CPFs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g))



