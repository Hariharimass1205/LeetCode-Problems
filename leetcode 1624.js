// 1624. Largest Substring Between Two Equal Characters

// Example 2:
// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".
// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.
let s = "scayofdzca"
let obj ={}
s.forEach()
let count = 0
let arr = [... new Set(s)]
if(s.length===arr.length){
  return -1
}else{
  for(i=0;i<s.length;i++){
     for(j=i+1;j<s.length;j++){
        if(arr.includes(s[i])){
         if(s[i]==s[j]){
             break;
         }
        }
    }
        count++
  }
}
console.log(count-2)