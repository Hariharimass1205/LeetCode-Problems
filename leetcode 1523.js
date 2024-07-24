    /**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    //     let count=0
    // for(i=low;i<=high;i++){
    //     if(i%2!=0){
    //         count++
    //     }
    // }return count
    var res = Math.floor((high-low)/2);
    if(low%2!=0||high%2!=0){
        res++
    }
    return res;
    };