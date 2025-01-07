/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let word = words.sort((a,b)=>a.length-b.length)
let arr = []
for(i=0;i<word.length-1;i++){
    for(j=i+1;j<word.length;j++){
       
         if(word[j].includes(word[i]) && word[j]!==word[i]){
             if(!arr.includes(word[i])){
            arr.push(word[i])
             }
         }
    }
}
return arr
};