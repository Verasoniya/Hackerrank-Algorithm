// Menentukan apakah ada huruf yang sama di kedua string
function twoStrings(s1, s2) {
  // Write your code here
  let duplicateChar = [];

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        duplicateChar.push(s1[i]);
      }
    }
  }

  if (duplicateChar.length == 0) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
