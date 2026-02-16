// 59. Spiral Matrix II

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]


var generateMatrix = function(n) {
    let matrix=new Array(n).fill(0).map(_ =>Array(n).fill(0));

    let top=0;
    let left=0;
    let right=matrix.length-1;
    let bottom=matrix[0].length-1
    let j=1
    while(left<=right && top<=bottom){
        for(let i=left;i<=right;i++){
            matrix[top][i]=j++;
        }
        top++
        for(let i=top;i<=bottom;i++){
            matrix[i][right]=j++
        }
        right--;
        if(top<=bottom){
            for(let i=right;i>=left;i--){
                matrix[bottom][i]=j++
            }
            bottom--
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                matrix[i][left]=j++
            }
            left++
        }
    }
    return matrix
};

let n=3
console.log(generateMatrix(n));
