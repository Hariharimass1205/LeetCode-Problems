/**
 * 
 * Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, ...
...'1' has a frequency of 2, and '2' has a frequency of 3.

 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let obj = {}
    let arr = []
for(i=0;i<nums.length;i++){
    let element = nums[i]
    if(obj[element]){
        obj[element] += 1
    }else{
        obj[element] = 1
    }
}
let ff = Object.keys(obj)
console.log(ff)
for(k=0;k<ff.length;k++){
    console.log(obj[ff[k]]);
while(obj[ff[k]]){
    arr.push(ff[k])
    obj[ff[k]] -= 1
}
}
};
let nums = [1,1,2,2,2,3]
frequencySort(nums)