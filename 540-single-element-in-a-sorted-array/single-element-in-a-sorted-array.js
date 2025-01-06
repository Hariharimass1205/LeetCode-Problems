/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let obj = {}
    nums.forEach((ele)=>obj[ele] = (obj[ele]||0)+1)
    for(let key in obj){
        if(obj[key]==1){
            return Number(key)
        }
    }
    return 0
};