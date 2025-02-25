/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
 obj={}
candyType.forEach((val)=>obj[val]=(obj[val]||0)+1)
let arr = Object.keys(obj)
if(candyType.length/2<=arr.length){
    return candyType.length/2
}else{
    return arr.length
}
};