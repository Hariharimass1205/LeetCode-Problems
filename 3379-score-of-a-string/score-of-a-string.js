/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let b=0
for(i=0;i<s.length-1;i++){
    let a = s.charCodeAt(i)
    let aa = s.charCodeAt(i+1)
    console.log(aa,a,"===",Math.abs(a-aa))
    b += Math.abs(a-aa)
}
return b
};