/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let arr = []
       nums.sort((a,b)=>a-b)
    while(nums.length!=0){
       let max = nums.pop()
       let min = nums.shift()
       arr.push((max+min)/2)
    }
    let arr2 = [...new Set(arr)]
    return arr2.length
};