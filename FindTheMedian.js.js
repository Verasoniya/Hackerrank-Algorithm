// Mencari nilai tengah
function findMedian(arr) {
  // Write your code here

  let sortArr = arr.sort((a, b) => a - b);
  let median = Math.floor(arr.length / 2);
  let result = sortArr[median];

  return result;
}
console.log(findMedian([0, 1, 2, 4, 6, 5, 3])); //3
