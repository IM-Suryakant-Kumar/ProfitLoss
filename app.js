const initPrice = document.querySelector("#initial-price");
const numOfStocks = document.querySelector("#quantity");
const currPrice = document.querySelector("#current-price");
const tellMeBtn = document.querySelector("#tell-me-btn");
const output = document.querySelector("#output");

function calculateProfitLoss(initPrice, currPrice, numOfStocks) {
  if (initPrice > currPrice) {
    const loss = (initPrice - currPrice) * numOfStocks;
    const lossPercentage = (loss / initPrice) * 100;
    console.log("loss", loss, 'lossPercentage', lossPercentage);
  } else if (initPrice < currPrice) {
    const profit = (currPrice - initPrice) * numOfStocks;
    const profitPercentage = (profit / initPrice) * 100;
    console.log('profit', profit,'profitPercentage', profitPercentage);
  }
}

calculateProfitLoss(5, 10, 5);
