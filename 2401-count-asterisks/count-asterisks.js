/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0
let a = s.split("|")
for(i=0;i<a.length;i++){
    for(j=0;j<a[i].length;j++){
        if(i%2==0 || i==0){
            if(a[i][j]=="*"){
                count++
            }
        }
    }
}
return count
};