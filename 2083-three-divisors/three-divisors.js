/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let arr = []
    for(i=0;i<=n;i++){
        if(n%i==0){
            arr.push(i)
        }
    }
    if(arr.length == 3 && i > 0){
        return true
    }else{
       return  false
    }

    
};