/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) { 
    let ia = Array(m);
    for (var i = 0; i < m; i++) {
        ia[i] = Array(n).fill(0);
    }
    for(let i=0;i<indices.length;i++){
        for(let j=0;j<ia[indices[i][0]].length;j++){
            ia[indices[i][0]][j]+=1
        }
        ia.forEach(x=>x[indices[i][1]]+=1)
    }
    
    let count=0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(ia[i][j]%2==1){
                count++
            }
        }
    }
    return count
};