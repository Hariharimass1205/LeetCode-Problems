/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
 let tObj={}
 let sObj={}
 for(i=0;i<s.length;i++){
    if(tObj[s[i]]){
        if(tObj[s[i]]==t[i]) continue
        else return false
    }
    if(sObj[t[i]]){
        if(tObj[t[i]]==s[i]) continue
        else return false
    }
    tObj[s[i]]=t[i]
    sObj[t[i]]=s[i]
 }
 return true
};