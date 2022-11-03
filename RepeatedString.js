// Error Abort Called
function repeatedString(s, n) {
  let text = "";
  let result = 0;
  let times = Math.floor(n / s.length);
  let extratimes = n % s.length;

  for (let i = 0; i < times; i++) {
    for (let j = 0; j < s.length; j++) {
      text += s[j];
    }
  }

  for (let k = 0; k < extratimes; k++) {
    text += s[k];
  }

  for (let m = 0; m < text.length; m++) {
    if (text[m] == "a") {
      result++;
    }
  }

  return result;
}

console.log(repeatedString("aa", 100)); //7
