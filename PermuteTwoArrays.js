// A di urutkan ASC, B diurutkan DESC, dijumlahkan per elemen, jika kurang dari k maka NO, lainnya YES
function twoArrays(k, A, B) {
  // Write your code here

  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortA.length; i++) {
    if (sortA[i] + sortB[i] < k) {
      return "NO";
    }
  }
  return "YES";
}
console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); //YES
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])); //NO
