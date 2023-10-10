var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Quando a requisição é bem-sucedida, manipule os dados aqui
    document.getElementById("resultado").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "exemplo.txt", true); // Arquivo de exemplo no servidor
xhttp.send()














  


  








