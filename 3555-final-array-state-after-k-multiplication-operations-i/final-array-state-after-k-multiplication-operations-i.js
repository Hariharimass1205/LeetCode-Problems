/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while(k){
        let small = Math.min(...nums)
        let index = nums.indexOf(small)
        nums[index] = nums[index]*multiplier
        k--
    }
    return nums
};