
// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]


var spiralOrder = function(matrix) {
    if(matrix.length==0) return [];
    let res=[];
    let rowBegin=0;
    let rowEnd=matrix.length-1;
    let colBegin=0;
    let colEnd=matrix[0].length-1;
    while(rowBegin<=rowEnd && colBegin<=colEnd){
        for(let i=colBegin;i<=colEnd;i++){
            res.push(matrix[rowBegin][i])
        }
        rowBegin++;
        for(let i=rowBegin;i<=rowEnd;i++){
            res.push(matrix[i][colEnd])
        }
        colEnd--
        if(rowEnd>=rowBegin){
            for(let i=colEnd;i>=colBegin;i--){
                res.push(matrix[rowEnd][i])
            }
            rowEnd--
        }
        if(colBegin<=colEnd){
            for(let i=rowEnd;i>=rowBegin;i--){
                res.push(matrix[i][colBegin])
            }
            colBegin++
        }
    }
    return res
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix))