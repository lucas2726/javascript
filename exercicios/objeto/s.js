const fs = require('fs');

// Caminho para o arquivo que você quer ler
const caminhoArquivo = 'caminho/do/seu/arquivo.txt';

// Lê o arquivo de forma assíncrona (não bloqueante)
fs.readFile(caminhoArquivo, 'utf8', (err, dados) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  console.log('Conteúdo do arquivo:', dados);
});

console.log('Lendo o arquivo...'); // Esta linha será impressa antes do conteúdo do arquivo devido à natureza assíncrona da leitura de arquivos.









   




















  


  








