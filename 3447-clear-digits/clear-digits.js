/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let str = s.split("")
    for(let i=0;i<str.length;i++){
        if(!isNaN(str[i])){
            str.splice(i-1,2)
            i = -1
        }
    }
return str.join("")

};