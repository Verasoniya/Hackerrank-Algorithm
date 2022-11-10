//Jika selisih kode ASCII terbalik sama dengan kode ASCII asli maka Funny
function funnyString(s) {
  // Write your code here
  let sReverse = [...s].reverse().join("");
  let charS = [];
  let charSReverse = [];
  let differenceS = [];
  let differenceSReverse = [];
  let isSame = false;

  if (s.length >= 2 && s.length <= 10000) {
    for (let i = 0; i < s.length; i++) {
      charS.push(s[i].charCodeAt());
    }

    for (let j = 0; j < sReverse.length; j++) {
      charSReverse.push(sReverse[j].charCodeAt());
    }

    for (let k = 0; k < charS.length - 1; k++) {
      let diff = charS[k] - charS[k + 1];
      differenceS.push(Math.abs(diff));
    }

    for (let m = 0; m < charSReverse.length - 1; m++) {
      let diff = charSReverse[m] - charSReverse[m + 1];
      differenceSReverse.push(Math.abs(diff));
    }

    for (let n = 0; n < differenceS.length; n++) {
      if (differenceS[n] == differenceSReverse[n]) {
        isSame = true;
      } else if (differenceS[n] != differenceSReverse[n]) {
        isSame = false;
        break;
      }
    }

    if (isSame == true) {
      return "Funny";
    } else if (isSame == false) {
      return "Not Funny";
    }
  } else {
    return "Not Funny";
  }
}
console.log(funnyString("ivvkxq")); //Funny
console.log(funnyString("ivvkx")); //Not Funny
