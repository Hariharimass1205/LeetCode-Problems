/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a = x.toString(2).padStart(32,0)
    let b = y.toString(2).padStart(32,0)
    let i=0
    let count=0
   for(i=0;i<a.length;i++){
     //  console.log(aa[i],bb[i])
    if(a[i]!==b[i]){
        count++
    }
   }
   if(a.length!==b.length){
       count += Math.abs(a.length-b.length)
   }
    return count
};