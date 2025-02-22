/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b)=>a-b)
    let c= []
    let a = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            c.push(nums[i])
        }
    }
    for(j=1;j<=nums.length;j++){
        a.push(j)
    }
    for(s=0;s<a.length;s++){
        if(!nums.includes(a[s])){
            c.push(a[s])
        }
    }
    return c
};