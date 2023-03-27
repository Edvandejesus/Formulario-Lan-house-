
// Cria referência ao Form  e ao h3 (onde sera exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("#resultado")

// Cria um "Ouvinte" de evento ,acionado quando o botão submiti for clicado

frm.addEventListener("submit", (e) => {

  // define a taxa de cobrança por 15 minutos de uso
  const taxa = Number(frm.taxaTempoDeUso.value)

  //Define o tempo minimo de uso em minutos
  const tempoMinimo = 15;
  const tempoDeUso = Number(frm.tempoDeUsoDoCliente.value)

  // Calcula o número de frações de 15 minutos
  const numFracoes = Math.ceil(tempoDeUso / tempoMinimo);
  // Calcula o valor total a ser pago pelo cliente
  const valorTotal = numFracoes * taxa;

  resp.innerText = `O valor total a ser pago é de R$:  ${valorTotal.toFixed(2)}`

  e.preventDefault()


});

