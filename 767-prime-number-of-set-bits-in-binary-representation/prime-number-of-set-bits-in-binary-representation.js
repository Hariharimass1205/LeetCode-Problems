var countPrimeSetBits = function (left, right) {
    // numbers not greater then 10^6 have max 20 set bits
    // primes to check 2, 3, 5, 7, 11, 13, 17, 19
    
    const primes = [2, 3, 5, 7, 11, 13, 17, 19];
    let count = 0;

    for (let i = left; i <= right; i++) {
        const setBitCount = [...i.toString(2)].reduce((s, c) => s + +c, 0);
        if (primes.includes(setBitCount)) count++;
    }

    return count;
};