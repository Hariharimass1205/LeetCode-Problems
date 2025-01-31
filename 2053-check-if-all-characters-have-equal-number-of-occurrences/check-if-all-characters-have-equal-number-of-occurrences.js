/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    // if(s.length%2!==0){
    //     return false
    // }
    let obj ={}
    let ss = s.split("")
    ss.forEach((ele)=>obj[ele]=(obj[ele]||0)+1)
    let sss = Object.values(obj)
    for(i=0;i<=sss.length-1;i++){
        if(sss[i]!==sss[0]){
         return false
      }
    }
    return true

};