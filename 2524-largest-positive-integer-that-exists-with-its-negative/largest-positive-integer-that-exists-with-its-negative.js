/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
   let res = []
  let sorte = nums.sort((a,b)=>a-b)
    for(i=0;i<sorte.length;i++){
    let max = sorte[i]
    let neg = sorte.includes(Number(`-${max}`))
    if(neg){
        res.push(max)
    }
    }
    if(res.length){
        return Math.max(...res)
    }else{
    return -1
    }
}