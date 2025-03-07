/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let arr1 = []
    let arr2 = []
    let arr = []
    for(i=0;i<nums.length;i++){
        if(nums[i]%2!==0){
        arr1.push(nums[i])
        }else{
        arr2.push(nums[i])
        }
    }
    console.log(arr1,arr2)
    for(j=0;j<nums.length/2;j++){
        arr.push(arr2[j])
        arr.push(arr1[j])
    }
    return arr
};