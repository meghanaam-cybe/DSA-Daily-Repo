// 72. Edit Distance

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

function EditDistance(word1,word2){
    let m=word1.length;
    let n=word2.length;
    let dp=new Array(m+1).fill(null).map(()=>Array(n+1).fill(0));
    for(let i=0;i<=m;i++){
        dp[i][0]=i;
    }
    for(let j=0;j<=n;j++){
        dp[0][j]=j;
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1]){
                dp[i][j]=dp[i-1][j-1]
            }
            else{
                dp[i][j]=1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[m][n]
}

let word1 = "horse"
let word2 = "ros"
console.log(EditDistance(word1,word2))