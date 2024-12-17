/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
 let str = s.split(" ");
    str.sort((a, b) => a[a.length - 1] - b[b.length - 1])

    let res = ""
    for (let i of str) {
        for (let j of i) {
            if (Number(j) >= 0 && Number(j) <= 9) {
                res += " ";
            } else {
                res += j;
            }
        }
    }

    return res.trim();
};