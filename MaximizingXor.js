function maximizingXor(l, r) {
  // Write your code here
  let maxXor = 0;
  for (let i = l; i <= r; i++) {
    for (let k = l; k <= r; k++) {
      if (maxXor < (i ^ k)) {
        maxXor = i ^ k;
      }
    }
  }

  return maxXor;
}
console.log(maximizingXor(10, 15)); //7
console.log(maximizingXor(11, 100)); //127
