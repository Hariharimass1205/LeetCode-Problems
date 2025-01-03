/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
 let arr = s.split(" ")
 if(arr.length!==pattern.length){
    return false
 }
    let obj = {}
    for(i=0;i<pattern.length;i++){
        let keys = Object.keys(obj)
       let values = Object.values(obj)
        if(!keys.includes(pattern[i]) && !values.includes(arr[i])){
            obj[pattern[i]] = arr[i]
        }
    }
    for(j=0;j<pattern.length;j++){
        if(obj[pattern[j]]!==arr[j]){
            return false
        }
    }
    return true
  
};