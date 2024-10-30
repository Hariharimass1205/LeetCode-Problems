/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let ans = []
    for(i=0;i<nums.length;i++){
        let leftsum=0
        let rightsum = 0
        if(nums[i-1]){
            console.log("left"+i)
            for(s=i-1;s>=0;s--){
                leftsum += nums[s]
            }
        }
        if(nums[i+1]){
            console.log("right"+i)
            for(s=i+1;s<nums.length;s++){
                rightsum += nums[s]
            }
        }
        console.log(leftsum,rightsum)
        ans.push(Math.abs(leftsum-rightsum))
        leftsum = 0
        rightsum = 0
    }
return ans
};