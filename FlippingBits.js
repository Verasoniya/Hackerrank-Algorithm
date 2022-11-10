//Kebalikan dari binernya n
function flippingBits(n) {
  // Write your code here

  let bitN = n.toString(2).padStart(32, "0");
  let reverseN = "";
  for (let i = 0; i < bitN.length; i++) {
    if (bitN[i] == 0) {
      reverseN += 1;
    } else {
      reverseN += 0;
    }
  }
  return parseInt(reverseN, 2);
}
console.log(flippingBits(4)); //4294967291
console.log(flippingBits(123456)); //4294843839
