/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
let res = 0
let res1 = 0
let i=0
let fin = 0
while(res<n){
    res = Math.pow(3,i)
    if(res>n){
       res = Math.pow(3,i-1)
        break;
    }
    i++
}
i--
fin = n - res
i--
console.log(fin,i);
while(i>=0){
    res1 = Math.pow(3,i)
    console.log(res1,fin);
    if(res1<=fin){
        fin -= res1
    }
    i--
}
if(fin==0){
    return true
}else{
    return false
}
};