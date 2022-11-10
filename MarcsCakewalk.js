//calorie diurutkan DESC, dikali dengan 2 pangkat i
function marcsCakewalk(calorie) {
  // Write your code here

  let sortCalorie = calorie.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < sortCalorie.length; i++) {
    result += Math.pow(2, i) * sortCalorie[i];
  }

  return result;
}

console.log(marcsCakewalk([7, 4, 9, 6])); //79
