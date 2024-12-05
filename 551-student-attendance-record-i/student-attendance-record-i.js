/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = 0
    let l = 0
    for(i=0;i<s.length;i++){
        if(s[i]=="A"){
            a++
        }
        if(s[i]=="L"&&s[i+1]=="L"&&s[i+2]=="L"){
            return false
        }
    }
    if(a<2){
        return true
    }else{
        return false
    }

};