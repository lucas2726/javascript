async function obterDadosDaAPI(url) {
    try {
      let resposta = await fetch(url);
      let dados = await resposta.json();
      console.log("Dados da API:", dados);
    } catch (erro) {
      console.error("Erro ao obter dados da API:", erro);
    }
  }
  





