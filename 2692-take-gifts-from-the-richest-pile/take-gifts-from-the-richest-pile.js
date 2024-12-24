/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let arr = []
    let sum = 0
    for(i=0;i<k;i++){
        let max= Math.max(...gifts)
        let ins = gifts.indexOf(max)
        let sqval = Math.floor(Math.sqrt(max))
        gifts.splice(ins,1,sqval)
    }
    console.log(gifts)
    for(j=0;j<gifts.length;j++){
        sum += gifts[j]
    }
   return sum
};