const currencyList = ["USD", "EUR", "INR", "GBP", "JPY", "CAD", "AUD"];

const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");

currencyList.forEach((cur) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  option1.value = option2.value = cur;
  option1.textContent = option2.textContent = cur;
  fromSelect.appendChild(option1);
  toSelect.appendChild(option2);
});

fromSelect.value = "EUR";
toSelect.value = "USD";

async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (from === to) {
    document.getElementById("result").textContent = "Choose different currencies.";
    return;
  }

  const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const result = data.result.toFixed(4);
    document.getElementById("result").textContent = 
      `${amount} ${from} = ${result} ${to}`;
  } catch (err) {
    document.getElementById("result").textContent = "Error fetching exchange rate.";
  }
}
