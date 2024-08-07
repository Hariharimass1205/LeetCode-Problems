/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let obj = {}
let sumarr = []
let res = 0
nums.forEach((ele) => obj[ele] = (obj[ele] || 0) + 1)
let val = Object.values(obj)
val.sort((a,b)=>a-b)
let maxx = Math.max(...val)
console.log(maxx);

sumarr.push(maxx)
for(i=0;i<val.length;i++){
    if(val[i]==maxx && i!==val.length-1){
        sumarr.push(val[i])
    }
}
console.log(sumarr)
for(j=0;j<sumarr.length;j++){
    res += sumarr[j]
}
return res
};