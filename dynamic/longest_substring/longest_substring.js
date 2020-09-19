// longest common substring

let a = "hish";
let b = "fish";

let resultMatrix = [];
let max = 0;

for (let i = 0; i < a.length; i++) {
    resultMatrix.push([]);
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            resultMatrix[i].push(1 + getLastMax(i, j, resultMatrix));
        } else {
            resultMatrix[i].push(0);
        }
    }
}


function getLastMax(x, y, resultMatrix) {
    if (x === 0 || y === 0) {
        return 0;
    } else {
        return resultMatrix[x - 1][y - 1];
    }
}

console.log(resultMatrix);