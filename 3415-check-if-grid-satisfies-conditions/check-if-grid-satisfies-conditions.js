/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    for(i=0;i<grid.length;i++){
        for(j=0;j<grid[i].length;j++){
            if(i < grid.length -1 && grid[i][j] !== grid[i + 1][j]){
                return false
            }else if ( j < grid[i].length -1 && grid[i][j] == grid[i][j + 1]){
                return false
            }
        }
    }
    return true
};