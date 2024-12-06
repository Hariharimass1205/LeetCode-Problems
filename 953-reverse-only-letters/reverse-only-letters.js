/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {

let ss = s.split("")
let regex =  /[A-Za-z]/
let left = 0
let right = ss.length-1

while(left<right){
    if(regex.test(ss[left]) && regex.test(ss[right])){
        [ss[left],ss[right]] = [ss[right],ss[left]]
        left++
        right--
    }else if (regex.test(ss[left]) && !regex.test(ss[right])){
        right--
        
    }else if (!regex.test(ss[left]) && !regex.test(ss[right])){
        left++
        right--
        
    }else if(!regex.test(ss[left]) && regex.test(ss[right])){
        left++
        
    }
}
 return ss.join("")
 
};