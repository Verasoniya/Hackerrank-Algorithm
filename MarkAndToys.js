// Diurutkan ASC, dijumlahkan per elemen, selama kurang dari k maka result += 1
function maximumToys(prices, k) {
  // Write your code here

  let sortPrices = prices.sort((a, b) => a - b);
  let sum = 0;
  let result = 0;

  for (let i = 0; i < sortPrices.length; i++) {
    sum = sum + sortPrices[i];
    if (sum <= k) {
      result++;
    }
  }
  return result;
}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)); //4
