/**
 * Função para realizar uma tentativa de adivinhação.
 * Obtém o valor inserido pelo usuário, compara com um número secreto
 * e exibe o resultado na página.
 */
function Chutar() {
  // Obtém a referência ao elemento de resultado na página
  var elementoResultado = document.getElementById("resultado");

  // Gera um número secreto aleatório de 0 a 9
  var numeroSecreto = Math.floor(Math.random() * 10);

  // Obtém o valor inserido pelo usuário e converte para número
  var chute = parseInt(document.getElementById("valor").value);

  // Exibe o valor do chute no console (apenas para fins de depuração)
  console.log(chute);

  // Verifica se o chute do usuário está correto
  if (chute === numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 9 || chute < 0) {
    // Chute fora do intervalo válido (0 a 9)
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 9";
  } else {
    // Chute incorreto
    elementoResultado.innerHTML = "Que pena, você errou. O número secreto era " + numeroSecreto;
  }
}
