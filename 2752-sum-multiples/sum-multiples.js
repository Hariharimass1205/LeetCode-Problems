/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let a = 0
    for(i=0;i<=n;i++){
        if(i%3==0 || i%5==0 || i%7==0 ){
            a+=i
        }
    }
    return a
};