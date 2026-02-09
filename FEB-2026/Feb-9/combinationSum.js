
var combinationSum = function(candidates, target) {
    let ans=[]
    combo(0,candidates,target,ans,[]);
    return ans    
};
function combo(ind,arr,target,ans,cur){
    if(ind==arr.length){
        if(target==0){
            ans.push([...cur]);
        }
        return
    }
    if(arr[ind]<=target){
        cur.push(arr[ind]);
        combo(ind,arr,target-arr[ind],ans,cur);
        cur.pop()
    }
    combo(ind+1,arr,target,ans,cur)
}

candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates,target));
