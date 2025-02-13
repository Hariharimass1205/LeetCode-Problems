/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
   nums.sort((a,b)=>a-b)
    let a = nums[nums.length-1]
    let aa = 0
    let ll = 0
    for(i=1;i<=k;i++){
      ll+=a
      let res = a + 1
      a = res
    }
    return ll
};