/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = [0]
    let val = 0
    for(i=0;i<gain.length;i++){
         val += gain[i]
         res.push(val)
    }
    return Math.max(...res)
};