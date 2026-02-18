

// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

var addBinary = function(a, b) {
    let i=a.length-1;
    let j=b.length-1;
    let res="";
    let carry=0;
    while(i>=0 || j>=0 || carry>0){
        let sum=carry;
        if(i>=0){
            sum+=Number(a[i]);
            i--
        }
        if(j>=0){
            sum+=Number(b[j]);
            j--
        }
        res=(sum%2)+res;
        carry=Math.floor(sum/2)
    }
    return res
    
};

let a="11"
let b="1";
console.log(addBinary(a,b));
