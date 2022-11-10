// Jika n + i == n ^ i, maka result += 1 (sum == xor)
function sumXor(n) {
  // Write your code here

  let result = 0;

  if (n == 0) {
    return 1;
  } else if (n > 0 && n <= 10 ** 15) {
    for (let i = 0; i < n; i++) {
      if (n + i == (n ^ i)) {
        result++;
      }
    }
  }
  return result;
}

console.log(sumXor(10)); //4
