let arr = [1,2,2,1,1,3]


let freqencey = {}
arr.forEach((element)=>freqencey[element] = (freqencey[element] || 0) + 1)
console.log(freqencey)
let arrr = Object.values(freqencey)
console.log(arrr)
let cc = 0
for(i=0;i<arrr.length;i++){
    for(j=i+1;j<arrr.length;j++){
        if(arrr[i]===arrr[j]){
            cc++
        }
    }
}
console.log(cc)
if(cc==0){
    return true
}else{
    return false
}
