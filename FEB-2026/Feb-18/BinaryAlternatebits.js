// 693. Binary Number with Alternating Bits

// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

// Example 1:

// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101
// Example 2:

// Input: n = 7
// Output: false
// Explanation: The binary representation of 7 is: 111.
// Example 3:

function Binary(n){
    let binary=n.toString(2);
    for(let i=0;i<binary.length;i++){
        if(binary[i]==binary[i+1]){
            return false
        }
    }
    return true
}
let n=7
console.log(Binary(n));
