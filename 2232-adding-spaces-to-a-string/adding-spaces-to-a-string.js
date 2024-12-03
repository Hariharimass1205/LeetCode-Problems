/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
   let aa = ""
   let j =0
    for(i=0;i<s.length;i++){
        if(spaces[j]==i){
            j++
            aa+=" "
        }
        aa+=s[i]
    }
    return aa
};