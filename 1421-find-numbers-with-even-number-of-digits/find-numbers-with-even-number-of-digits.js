/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count=0
  for(i=0;i<nums.length;i++){
      let len = nums[i].toString().split("")
      if(len.length%2==0){
           count++
      }
  }
  return count
};