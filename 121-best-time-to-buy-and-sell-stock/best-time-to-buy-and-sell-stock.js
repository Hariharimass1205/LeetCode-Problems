/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 var buy=0;
    var sell=1;
    var pro=0;

    for(let i=sell;i<prices.length;i++){
        if(prices[buy]<prices[sell]){
            var newprofit = prices[sell]-prices[buy]
                if(pro<newprofit){
                    pro=newprofit;
                }
            }else{
                buy=sell;
            }
            sell++;
        
    }
    return pro;
};