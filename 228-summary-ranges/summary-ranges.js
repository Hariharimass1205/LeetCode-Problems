/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
   let arr = []
    let i = 0;

    while(i<nums.length){
        let start = nums[i]
        while(i+1<nums.length&&nums[i+1]===nums[i]+1){
            i++
        }
        if(start!=nums[i]){
            arr.push(start+"->"+nums[i])
        }else{
            arr.push(start.toString())
        }
        i++
    }
    return arr;
};