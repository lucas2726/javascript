const http = require("http")

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1>")
}).listen(8181)


