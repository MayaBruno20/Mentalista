function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var numeroSecreto = Math.floor(Math.random() * 10);
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 9 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um numero de 0 à 9";
  } else {
    elementoResultado.innerHTML =
      "Que pena, você errou. O número secreto era !" + numeroSecreto;
  }
}