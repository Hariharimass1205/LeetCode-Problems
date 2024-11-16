/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
   let str = date.split("-")
 let aa = []
 for(i=0;i<str.length;i++){
     let a = Number(str[i]).toString(2)
         aa.push(a)
 }
 return aa.join("-")
};