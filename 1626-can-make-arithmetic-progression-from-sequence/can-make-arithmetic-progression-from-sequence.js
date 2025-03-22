/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let arr1= arr.sort((a,b)=>a-b)
    let res = 0
    for(i=1;i<arr1.length-1;i++){
       res= arr1[0]-arr1[1]
       if(res!==(arr1[i]-arr1[i+1])){
        return false
       }
    }
    return true
};