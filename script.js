// Good Luck 💪🏾
function findLargestNumbers(arrays) {
  const largestNumbers = [];

  for (let i = 0; i < arrays.length; i++) {
    let largest = arrays[i][0];

    for (let j = 1; j < arrays[i].length; j++) {
      if (arrays[i][j] > largest) {
        largest = arrays[i][j];
      }
    }

    largestNumbers.push(largest);
  }

  return largestNumbers;
}
console.log(findLargestNumbers([[7, 3, 18, 11], [54, 12, 43, 77], [16, 11, 8]]))
// console.log(findLargestNumbers([[22, 55, 12], [45, 66, 95], [22, 5, 11]]))