// Best time to buy and sell stocks

let priceList = [7, 1, 5, 3, 6, 4];

function maxProfit(price) {
  let maxProfit = 0;
  let bestBuy = price[0];
  for (let i = 1; i < price.length; i++) {
    if (price[i] > bestBuy) {
      maxProfit = Math.max(maxProfit, price[i] - bestBuy);
    }
    bestBuy = Math.min(bestBuy, price[i]);
  }
  return maxProfit;
}

maxProfit(priceList);
