// 118. Pascal's Triangle 1

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

function Pascal(num){
    let triangle=[]
    for(let i=0;i<num;i++){
        let row=new Array(i+1).fill(1);
        for(let j=1;j<i;j++){
            row[j]=triangle[i-1][j-1]+triangle[i-1][j]
        }
        triangle.push(row)
    }
    return triangle
}
console.log(Pascal(4));


// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

function Pascal2(rowIndex){
    let triangle=[]
    for(let i=0;i<=rowIndex;i++){
        let row=new Array(i+1).fill(1);
        for(let j=1;j<i;j++){
            row[j]=triangle[i-1][j-1]+triangle[i-1][j]
        }
        triangle.push(row)
    }
    return triangle[rowIndex]
}
console.log(Pascal2(3));

