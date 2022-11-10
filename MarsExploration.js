//Jumlah karakter yang beda
function marsExploration(s) {
  // Write your code here
  let sizeS = s.length / 3;
  let sos = "SOS";
  let newSos = "";
  let result = 0;

  for (let i = 0; i < sizeS; i++) {
    for (let j = 0; j < sos.length; j++) {
      newSos += sos[j];
    }
  }

  for (let k = 0; k < s.length; k++) {
    if (s[k] != newSos[k]) {
      result++;
    }
  }

  return result;
}

console.log(marsExploration("SOSSPSSQSSOR")); //3
