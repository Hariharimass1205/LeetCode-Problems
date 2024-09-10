/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    
let one = ['q','w','e','r','t','y','u','i','o','p']
let two = ['a','s','d','f','g','h','j','k','l']
let three = ['z','x','c','v','b','n','m']
let arr = []
for(i=0;i<words.length;i++){
    let curr = words[i]
    let count1 = 0
    let count2 = 0
    let count3 = 0
    for(j=0;j<curr.length;j++){
        if(one.includes(curr[j].toLowerCase())){
            count1++
        }
        if(two.includes(curr[j].toLowerCase())){
          //  console.log(words[i][j])
            count2++
        }
        if(three.includes(curr[j].toLowerCase())){
            count3++
        }
    }
    console.log(count1,count2,count3)
    if(count1==curr.length || count2==curr.length|| count3==curr.length){
        console.log("hiii")
        arr.push(words[i])
    }
}
console.log(arr)
return arr
};