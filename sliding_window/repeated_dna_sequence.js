// Given a string s that represents a DNA sequence, and a number k, return all the contiguous sequences (substrings) of
// length k that occur more than once in the string. The order of the returned subsequences does not matter. If no repeated
// subsequence is found, the function should return an empty array.

// naive approach
//function findRepeatedSequences(s, l) {
//    let i = 0;
//    let k = l + 1;
//    let result = new Map();
//
//    while (i + l <= s.length) {
//        k = i + l + 1;
//        const currentWindow = s.slice(i, i + l);
//        if (k + l > s.length) {
//            return Array.from(result.keys());
//        }
//        while (k + l <= s.length) {
//            const compareWindow = s.slice(k, k + l);
//            if (compareWindow === currentWindow) {
//                if (!result.get(currentWindow)) {
//                    result.set(currentWindow, 1);
//                }
//            }
//            k++;
//        }
//        i++;
//    }
//}

// sliding window approach
function findRepeatedSequences(s, l) {
    let i = 0;
    let resultMap = new Map();
    while (i + l <= s.length) {
        const currentWindow = s.slice(i, i + l);

        if (resultMap.get(currentWindow)) {
            resultMap.set(currentWindow, resultMap.get(currentWindow) + 1);
        } else {
            resultMap.set(currentWindow, 1);
        }
        i++;
    }

    let result = [];
    resultMap.forEach((value, key) => {
        if (value > 1) {
            result.push(key);
        }
    });
    return result;
}