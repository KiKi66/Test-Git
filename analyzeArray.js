function analyzeArray(arr) {
  const sortedArr = arr.sort();
  const average = sortedArr.reduce((a, b) => a + b) / sortedArr.length;
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length - 1];
  const length = sortedArr.length;
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyzeArray;
