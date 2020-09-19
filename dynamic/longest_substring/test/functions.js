const functions = {
  longestSubstring: (a, b) => {
    let resultMatrix = [];
    let maxLength = 0;
    let maxIndex = 0;

    for (let i = 0; i < a.length; i++) {
      resultMatrix.push([]);
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          let tmpLongest = 1 + getLastMax(i, j, resultMatrix);
          if (maxLength < tmpLongest) {
            maxLength = tmpLongest;
            maxIndex = i;
          }
          resultMatrix[i].push(tmpLongest);
        } else {
          resultMatrix[i].push(0);
        }
      }
    }
    return b.slice((maxIndex + 1) - maxLength, maxIndex + 1);
  }
}

function getLastMax(x, y, resultMatrix) {
  if (x === 0 || y === 0) {
    return 0;
  } else {
    return resultMatrix[x - 1][y - 1];
  }
}

module.exports = functions;