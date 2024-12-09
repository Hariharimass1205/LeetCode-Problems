/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
 let ss = s.split("")
let obj = {}
ss.forEach((val)=>obj[val]=(obj[val]||0)+1)
console.log(obj)
let val = Object.keys(obj).sort((a,b)=>obj[b]-obj[a])
console.log(val)
let num = ''
for(let key of val){
  num += key.repeat(obj[key])
}
return num
};