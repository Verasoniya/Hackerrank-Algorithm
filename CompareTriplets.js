function compareTriplets(a, b) {
  // Write your code here

  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }
  return [alice, bob];
}

console.log(compareTriplets([5, 6, 7], [3, 5, 8]));
