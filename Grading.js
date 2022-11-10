function gradingStudents(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] <= 37) {
      result.push(grades[i]);
    } else if (grades[i] > 37 && grades[i] <= 40) {
      result.push(40);
    } else if (grades[i] > 40 && grades[i] <= 42) {
      result.push(grades[i]);
    } else if (grades[i] > 42 && grades[i] <= 45) {
      result.push(45);
    } else if (grades[i] > 45 && grades[i] <= 47) {
      result.push(grades[i]);
    } else if (grades[i] > 47 && grades[i] <= 50) {
      result.push(50);
    } else if (grades[i] > 50 && grades[i] <= 52) {
      result.push(grades[i]);
    } else if (grades[i] > 52 && grades[i] <= 55) {
      result.push(55);
    } else if (grades[i] > 55 && grades[i] <= 57) {
      result.push(grades[i]);
    } else if (grades[i] > 57 && grades[i] <= 60) {
      result.push(60);
    } else if (grades[i] > 60 && grades[i] <= 62) {
      result.push(grades[i]);
    } else if (grades[i] > 62 && grades[i] <= 65) {
      result.push(65);
    } else if (grades[i] > 65 && grades[i] <= 67) {
      result.push(grades[i]);
    } else if (grades[i] > 67 && grades[i] <= 70) {
      result.push(70);
    } else if (grades[i] > 70 && grades[i] <= 72) {
      result.push(grades[i]);
    } else if (grades[i] > 72 && grades[i] <= 75) {
      result.push(75);
    } else if (grades[i] > 75 && grades[i] <= 77) {
      result.push(grades[i]);
    } else if (grades[i] > 77 && grades[i] <= 80) {
      result.push(80);
    } else if (grades[i] > 80 && grades[i] <= 82) {
      result.push(grades[i]);
    } else if (grades[i] > 82 && grades[i] <= 85) {
      result.push(85);
    } else if (grades[i] > 85 && grades[i] <= 87) {
      result.push(grades[i]);
    } else if (grades[i] > 87 && grades[i] <= 90) {
      result.push(90);
    } else if (grades[i] > 90 && grades[i] <= 92) {
      result.push(grades[i]);
    } else if (grades[i] > 92 && grades[i] <= 95) {
      result.push(95);
    } else if (grades[i] > 95 && grades[i] <= 97) {
      result.push(grades[i]);
    } else if (grades[i] > 97 && grades[i] <= 100) {
      result.push(100);
    }
  }

  return result;
}

console.log(gradingStudents([73, 67, 38, 33])); //[75, 67, 40, 33]
