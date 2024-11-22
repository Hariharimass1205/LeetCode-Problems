/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj ={}
     nums.forEach((ele)=>obj[ele] = (obj[ele] || 0)+1)
    let arr = []
    console.log(obj)
    for(let key in obj){
        if(obj[key]>1){
            arr.push(Number(key))
        }
    }
    return arr
};