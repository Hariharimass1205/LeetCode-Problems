/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   
let obj = {}
let res = null;
let ss = s.split("")
ss.forEach((ele)=>obj[ele]=(obj[ele]||0)+1)
console.log(obj)
for(let key in obj){
    if(obj[key]==1){
        res = key
        break;
    }
}

for(i=0;i<ss.length;i++){
    if(ss[i]==res){
        return i
    }
}

   return -1
};