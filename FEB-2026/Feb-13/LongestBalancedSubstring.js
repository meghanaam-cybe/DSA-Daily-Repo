// 3713. Longest Balanced Substring I

// You are given a string s consisting of lowercase English letters.

// A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

// Return the length of the longest balanced substring of s.

 

// Example 1:

// Input: s = "abbac"

// Output: 4

// Explanation:

// The longest balanced substring is "abba" because both distinct characters 'a' and 'b' each appear exactly 2 times.

// Example 2:

// Input: s = "zzabccy"

// Output: 4

// Explanation:

// The longest balanced substring is "zabc" because the distinct characters 'z', 'a', 'b', and 'c' each appear exactly 1 time.​​​​​​​

/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let maxlen=0
    let n=s.length;
    for(let i=0;i<n;i++){
        let distinct=0;
        let maxFreq=0;
        let freq=new Array(26).fill(0);
        for(let j=i;j<n;j++){
            let idx=s.charCodeAt(j)-97;
            if(freq[idx]==0){
                distinct++;
            }
            freq[idx]++;
            maxFreq=Math.max(maxFreq,freq[idx]);
            let len=j-i+1
            if(len==distinct*maxFreq){
                maxlen=Math.max(len,maxlen)
            }
        }
    }
    return maxlen
    
};


let s = "zzabccy";
console.log(longestBalanced(s));
