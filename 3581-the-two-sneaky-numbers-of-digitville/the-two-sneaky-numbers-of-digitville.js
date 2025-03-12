/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let obj = {}
    let arr = []
    nums.forEach((val)=>obj[val]=(obj[val]||0)+1)
    for(let key in obj){
        if(obj[key]>1){
            arr.push(Number(key))
        }
    }
    return arr
};