/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    
let count = 0
let res = []
let inres = []
for(i=0;i<s.length;i++){
    if(count==0){
        inres = [i]
    }
    if(s[i]==s[i+1]){
        count++
    }else{
        if(count>=2){
            inres.push(i)
            res.push(inres)
        }
        count = 0
    }
}
return res
};