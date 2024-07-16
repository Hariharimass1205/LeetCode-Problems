/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = s.split("")
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(indices[i]>indices[j]){
            let temp = indices[i]
            indices[i] = indices[j]
            indices[j] = temp
            let temp1 = arr[i]
            arr[i] = arr[j]
            arr[j] = temp1
        }
    }
}
return arr.join("")
};
