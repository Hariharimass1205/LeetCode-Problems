/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
   let num1 = num.split("")
   let index = 0

 for(i=num1.length-1;i>=0;i--){
        if(Number(num[i])>0){
          index = i
          break
        }
    }
  
  num1.length = index+1
  return num1.join("")
    
};