function findMaxSlidingWindow(a, w) {
    let result = [];

    for (let i = 0; i < a.length - w + 1; i++) {
        let max = a[i];
        for (let j = i; j < w + i - 1; j++) {
            if  (max < a[j + 1]) {
                max = a[j + 1];
            }
        }
        result.push(max);
    }
    return result;
}