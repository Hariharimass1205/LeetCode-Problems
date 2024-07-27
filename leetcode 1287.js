// 1287. Element Appearing More Than 25% In Sorted Array
// Easy
// Topics
// Companies
// Hint
// Given an integer array sorted in non-decreasing order,
// there is exactly one integer in the array that occurs 
//more than 25% of the time, return that integer.
// Example 1:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:
// Input: arr = [1,1]
// Output: 1

 let arr = [1,2,2,6,6,6,6,7,10]
let percentage = (arr.length * 25) / 100
 console.log(percentage)
    let count = 0
    let obj  = {}
    arr.forEach((element)=>{
        obj[element] = (obj[element] || 0) + 1
    })
    console.log(Object.values(obj),obj)
    for(let key in obj){
       if(obj[key]>percentage){
        console.log( key)
       }
    }