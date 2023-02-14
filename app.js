const initPrice = document.querySelector("#initial-price");
const numOfStocks = document.querySelector("#quantity");
const currPrice = document.querySelector("#current-price");
const tellMeBtn = document.querySelector("#tell-me-btn");
const output = document.querySelector("#output");

tellMeBtn.addEventListener("click", () => {
  const initPriceValue = Number(initPrice.value);
  const currPriceValue = Number(currPrice.value);
  const numOfStocksValue = Number(numOfStocks.value);

  if (initPriceValue === 0 || currPriceValue === 0 || numOfStocksValue === 0) {
    alert("Please fill out all Fields");
    return;
  }

  if (initPriceValue > currPriceValue) {
    const loss = (initPriceValue - currPriceValue) * numOfStocksValue;
    const lossPercentage = ((loss / initPriceValue) * 100).toFixed(2);
    console.log("loss", loss, "lossPercentage", lossPercentage);
  } else if (initPriceValue < currPriceValue) {
    const profit = (currPriceValue - initPriceValue) * numOfStocksValue;
    const profitPercentage = ((profit / initPriceValue) * 100).toFixed(2);
    console.log("profit", profit, "profitPercentage", profitPercentage);
  }
});
