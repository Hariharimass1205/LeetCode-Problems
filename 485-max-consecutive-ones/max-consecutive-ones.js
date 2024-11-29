/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxc = 0
    for(i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++
        
        if(count>maxc){
            maxc=count
        }
        }else{
            count = 0
        }
    }
    return maxc
};