/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = []
for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
        let ind = nums2.indexOf(nums1[i])
        let flag = true
        for (let j = ind; j < nums2.length; j++) {
            if (nums2[ind] < nums2[j]) {
                arr.push(nums2[j])
                flag = false
                break;
            }
        }
        if (flag == true) {
            arr.push(-1)
        }
    }
}
    return arr
};