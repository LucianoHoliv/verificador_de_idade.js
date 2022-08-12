function verificar() {
  let data = new Date();
  let anoAtual = data.getFullYear();
  let anoNasc = document.getElementById("TextoAno").value;
  let resultado = document.querySelector("#resultado");

  if (anoNasc > anoAtual || anoNasc < 1900 || anoNasc.length == 0) {
    window.alert("[ERRO] - Verifique as informações e tente novamente.");
  } else {
    let sexo = document.getElementsByName("sexo");
    let idade = anoAtual - anoNasc;
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.style.paddingTop = "10px";
    if (sexo[0].checked) {
      //MASCULINO
      genero = "Homem";
      if (idade >= 0 && idade <= 10) {
        // criança
        img.setAttribute("src", "img/foto-bebe-m.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "img/foto-jovem-m.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "img/foto-adulto-m.png");
      } else {
        //idoso
        img.setAttribute("src", "img/foto-idoso-m.png");
      }
    } else {
      //FEMININO
      genero = "Mulher";
    }
    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}
