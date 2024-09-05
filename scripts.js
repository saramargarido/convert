// Cotação de moedas do dia
const USD = 5.61
const EUR = 6.23
const GBP = 7.39

// obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// capturando evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1,00 = ${formatCurrencyBRL(price)}`
    let total = amount * price

    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter")
    }

    total = formatCurrencyBRL(total).replace("R$", "")
    result.textContent = `${total} Reais`

    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    footer.classList.add("show-result")
    alert("Não foi possível converter, tente novamente mais tarde")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
