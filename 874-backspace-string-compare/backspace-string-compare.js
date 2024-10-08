/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let ss = s.split("")
    let tt = t.split("")
    let check = (arr)=>{
        let res = []
        for(let i=0;i<arr.length;i++){
            if(arr[i]=="#"){
                res.pop()
            }else{
                res.push(arr[i])
            }
        }
        return res.join('')
    }

    let ans1 = check(ss)
    let ans2 = check(tt)

    return ans1==ans2


//     while(ss.length || tt.length){
//     for(i=0;i<ss.length;i++){
//         if(ss[i]=="#"){
//             ss.splice(i-1,2)
//         }
//     }
//     for(j=0;j<tt.length;j++){
//         if(tt[j]=="#"){
//             tt.splice(j-1,2)
//         }
//     }
//     }
//    let a = tt.join("")
//    let b = ss.join("")
//     if(a==b){
//         return true
//     }else{
//         return false
//     }
};