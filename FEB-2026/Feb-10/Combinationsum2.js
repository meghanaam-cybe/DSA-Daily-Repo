// Given a collection of candidate numbers (candidates) and a target number (target), 
// find all unique combinations in candidates where the candidate numbers sum to target.
function combinationSum(candidates,target){
    candidates.sort((a,b)=>a-b);
    let ans=[];
    combo(candidates,target,ans,[],0);
    return ans;
}

function combo(candidates,target,ans,cur,ind){
    if(target==0){
        ans.push([...cur]);
        return
    }
    for(let i=ind;i<candidates.length;i++){
        if(i>ind && candidates[i]==candidates[i-1]) continue
        if(candidates[i]>target) break
        cur.push(candidates[i]);
        combo(candidates,target-candidates[i],ans,cur,i+1);
        cur.pop()
    }
}

const candidates=[10,1,2,7,6,1,5]
let target=10

console.log(combinationSum(candidates,target))