/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0
        let right = n
        while(right>=left){
            let mid = Math.floor((right+left)/2)
            if(isBadVersion(mid)){
                   if(!isBadVersion(mid-1)){
                    return mid
                   }else{
                    right = mid-1
                   }
                }else{
                    left = mid+1
                }
            }
        }
};