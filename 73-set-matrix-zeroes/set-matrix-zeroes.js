/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let arr = []
   for(i=0;i<matrix.length;i++){
    if(matrix[i].includes(0)){
          for(j=0;j<matrix[i].length;j++){
              if(matrix[i][j]==0){
                  arr.push([j])
              }
              matrix[i][j]=0
          }
      }
   }
   
   
  for(h=0;h<matrix.length;h++){
      if(arr.length){
          for(c=0;c<arr.length;c++){
          for(s=0;s<matrix.length;s++){
              matrix[s][arr[c]]=0
          }
          }
      }
 
    }
};