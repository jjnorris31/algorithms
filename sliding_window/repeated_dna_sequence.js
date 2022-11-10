function repeatedDNASequence(a1, n1) {
    let result = new Map();
    let res = [];

    if (a1.length < n1) {
        return [];
    }
    for (let i = 0; i < a1.length - n1; i++) {
        if (result.get(a1.slice(i, i + n1))) {
            result.set(a1.slice(i, i + n1), result.get(a1.slice(i, i + n1)) + 1);
        } else {
            result.set(a1.slice(i, i + n1), 1);
        }
    }

    result.forEach((value, key) => {
        if (value > 1) {
            res.push(key);
        }
    });

    return res.length > 0 ? res : a1;

}


console.log(repeatedDNASequence("AAAAAAAAAA", 10));