// Given an array of integers nums, find the length of the longest balanced subarray.
// A balanced array is an array that has an equal number of even and odd integers.
function LongestBalncedSubarray(nums){
    n=nums.length;
    let maxlen=0;
    for(let i=0;i<n;i++){
        // we can use set to store the even and odd numbers in the subarray
        let even=new Set();
        let odd=new Set();
        for(j=i;j<n;j++){
            if(nums[j]%2==0){
                even.add(nums[j])
            }else{
                odd.add(nums[j])
            }
            // if the size of even and odd sets are equal, then we can update the maxlen
            if(even.size==odd.size){
                maxlen=Math.max(maxlen,j-i+1)
            }
        }
    }
    return maxlen
}
//Example

let nums = [2,5,4,3,2]
console.log(LongestBalncedSubarray(nums));
