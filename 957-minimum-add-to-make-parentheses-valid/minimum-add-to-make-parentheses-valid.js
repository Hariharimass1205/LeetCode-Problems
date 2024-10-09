/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let leftsideCount = 0
    let rightsideCount = 0

    for(let key of s){
        if(key=="("){
            leftsideCount++
        }else{
            if(leftsideCount==0){
                rightsideCount++
            }else{
                leftsideCount--
            }
        }
    }
    return leftsideCount + rightsideCount
};