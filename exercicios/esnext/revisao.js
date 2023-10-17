try {
  // Código que pode gerar um erro
  const resultado = 10 / 0; // Tentativa de divisão por zero
  console.log(resultado); // Esta linha não será executada se ocorrer um erro acima
} catch (erro) {
  // Código para lidar com o erro
  console.error('Ocorreu um erro:', erro); // Mensagem de erro será exibida
}

  





