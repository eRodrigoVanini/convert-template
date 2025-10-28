//Cotação de moedas do dia.
const USD = 5.37;
const EUR = 6.27;
const GBP = 7.17;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const descripton = document.getElementById("description");
const result = document.getElementById("result");

//Manipulando o input amount para receber somente números.
// /\D+/g procura caracteres string
//replace vai substituir hasCharactersRegex por nada ""
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//Capura submit
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//Função converter moeda (no description)
function convertCurrency(amount, price, symbol) {
  try {
    //Exibindo a cotação da moeda selecionada
    descripton.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;
    //Calcula o total
    let total = amount * price;
    //Exibe o resultado total
    result.textContent = total;

    //Aplica a classe que exibe o footer (resultado)
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

//Formata a moeda em Real Brasileiro (no description)
function formatCurrencyBRL(value) {
  //Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
