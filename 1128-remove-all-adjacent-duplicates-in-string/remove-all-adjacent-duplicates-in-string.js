/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for(i=0;i<s.length;i++){
        if(stack.length > 0 && stack[stack.length-1]===s[i]){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
   let g = stack.join("")
   return g
};