/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0
    let neg = 0
    nums.filter((num)=>num>0?pos++:"")
    nums.filter((num)=>num<0?neg++:"")
    console.log(pos,neg)
    return Math.max(pos,neg)
};