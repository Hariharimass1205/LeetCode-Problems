/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let arr = nums.sort((a,b)=>a-b)
    let a = arr[arr.length-1]
    let b = arr[arr.length-2]
    return (a-1)*(b-1)
};