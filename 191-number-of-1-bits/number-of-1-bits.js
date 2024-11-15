/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  let str = n.toString(2)
  let a = 0
  for(i=0;i<str.length;i++){
    a+= Number(str[i])
  }
  return a
};