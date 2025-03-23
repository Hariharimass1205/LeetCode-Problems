/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let obj = {}
    nums.forEach((val)=>obj[val]=(obj[val]||0)+1)
    let keyy = Object.keys(obj)
    for(let key in obj){
        if(obj[key]>1){
            return true
        }
    }
    return false
};