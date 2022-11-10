function minimumWindowSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    let k = -1;

    while(i < str1.length) {
        if (str1[i] === str2[j]) {
            if (k < 0) {
                k = i;
            }
            j++;
        }

        if (j === str2.length) {
            return str1.slice(k, i + 1);
        }
        i++;
    }

    return "";
}