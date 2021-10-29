/*******
 * Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all 
the elements on the secondary diagonal that are not part of the primary diagonal.
********
Example
*********
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
*******************************************************************/
/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    count=0
    for(let i=0,j=mat.length-1;i<mat.length;i++,j--){
            if(i!==j){
                count+=mat[i][j]
                count+=mat[i][i]
        }
    }
    if(mat.length%2===1){
        count+=mat[(mat.length-1)/2][(mat.length-1)/2]
    }
    return count
};