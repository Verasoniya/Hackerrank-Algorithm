function simpleArraySum(ar) {
  // Write your code here
  let sumArr = ar.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sumArr;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
