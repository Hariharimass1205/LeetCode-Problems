/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    const result = []
    const digits = String(num).split('')

    const odds = digits.filter((num) => num % 2 !== 0).sort((a, b) => a - b)
    const evens = digits.filter((num) => num % 2 === 0).sort((a, b) => a - b)

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            result.push(evens.pop())
        } else {
            result.push(odds.pop())
        }
    }

    return Number(result.join(''))
};