// 3232. Find if Digit Game Can Be Won
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let alice  = 0
    let bob = 0
    for(i=0;i<nums.length;i++){
        if(nums[i] < 10){
            alice += nums[i]
        }else{
            bob += nums[i]
        }
    }
    if(alice < bob) {
        alice = bob 
        bob = 0
        }
    if(alice > bob){
        return true
    }else{
        return false
    }
};