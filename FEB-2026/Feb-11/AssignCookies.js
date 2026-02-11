function Assign(g,s){
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let count=0;
    let i=0;
    let j=0
    while(i<g.length && j<s.length){
        if(s[j]>=g[i]){
            count++
            i++
        }
        j++;
    }
    return count;

}

let g=[1,2,3];
let s=[1,1,2]
console.log(Assign(g,s));
