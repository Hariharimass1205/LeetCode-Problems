/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = []
    for(i=0;i<nums.length;i++){
        if(nums[i]<0){
           arr.push(Math.pow(Math.abs(nums[i]),2))
        }else{
            arr.push(Math.pow(nums[i],2))
        }
    }
    return arr.sort((a,b)=>a-b)
};