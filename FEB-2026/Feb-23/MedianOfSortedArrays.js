// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function Median(nums1,nums2){
    let merged=nums1.concat(nums2);
    merged.sort((a,b)=>a-b);
    n=merged.length;
    let median
    if(n%2==0){
        median=(merged[n/2-1]+merged[n/2])/2
    }
    else{
        median=merged(Math.floor[n/2])
    }
    return median
}
let nums1 = [1,2], nums2 = [3,4]
console.log(Median(nums1,nums2));
