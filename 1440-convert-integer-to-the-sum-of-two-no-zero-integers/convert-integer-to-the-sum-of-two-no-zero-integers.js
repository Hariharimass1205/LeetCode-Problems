/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let a = 0
    let b = 0
    let arr = []
    for(i=0;i<n;i++){
        for(j=n;j>0;j--){
            let res1 = i.toString().includes("0")
        let res2 = j.toString().includes("0")
        if(!res1){
            a=i
        }
        if(!res2){
            b=j
        }
            if(a+b==n && a!==0 && b!==0 ){
                arr.push(a,b)
                return arr
            }
        }
    }
};