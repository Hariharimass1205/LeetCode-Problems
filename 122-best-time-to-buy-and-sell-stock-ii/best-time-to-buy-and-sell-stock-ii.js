/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mp = 0
    for(i=0;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            mp += prices[i]-prices[i-1]
        }
    }
    return mp
};