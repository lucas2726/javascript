const fs = require('fs');

// Dados que você quer escrever no arquivo
const dadosParaEscrever = 'Olá, mundo!';

// Caminho para o arquivo onde você quer escrever os dados
const caminhoArquivo = 'caminho/do/seu/arquivo.txt';

// Escreve os dados no arquivo de forma assíncrona
fs.writeFile(caminhoArquivo, dadosParaEscrever, (err) => {
  if (err) {
    console.error('Erro ao escrever no arquivo:', err);
    return;
  }
  console.log('Dados foram escritos no arquivo com sucesso.');
});








   




















  


  








