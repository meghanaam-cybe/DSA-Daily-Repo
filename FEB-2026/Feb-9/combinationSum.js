
// 39. Combination Sum
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
var combinationSum = function(candidates, target) {
    let ans=[]
    combo(0,candidates,target,ans,[]);
    return ans    
};
// Time Complexity: O(2^n) where n is the number of candidates. In the worst case, we explore all possible combinations of candidates.
function combo(ind,arr,target,ans,cur){
    // Base case: If we've considered all candidates
    if(ind==arr.length){
        if(target==0){
            ans.push([...cur]);
        }
        return
    }
    // Recursive case: Include the current candidate if it does not exceed the target
    if(arr[ind]<=target){
        cur.push(arr[ind]);
        combo(ind,arr,target-arr[ind],ans,cur);
        cur.pop()
    }
    combo(ind+1,arr,target,ans,cur)
}

candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates,target));
