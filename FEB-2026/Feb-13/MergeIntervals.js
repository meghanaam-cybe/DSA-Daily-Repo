
// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.



var merge = function(intervals) {
    if(intervals.length<2){
        return intervals
    }
    intervals.sort((a,b)=>a[0]-b[0]);
    let merged=[];
    let j=0;
    let first=intervals.shift();
    merged.push(first);
    for(let i=0;i<intervals.length;i++){
        if(merged[j][1]>=intervals[i][0]){
            merged[j]=[merged[j][0],Math.max(intervals[i][1],merged[j][1])]
        }else{
            merged.push([intervals[i][0],intervals[i][1]]);
            j++
        }
    }
    return merged
    
};

let intervals = [[1,4],[4,5]];
console.log(merge(intervals));
