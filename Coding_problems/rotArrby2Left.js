
const input = [2,7,11,4,-2];

// rotate array by 2 places to left 
// output = [11,4,-2,2,7]

let res=[];
for(let i=2;i<input.length;i++){
    res.push(input[i]);
}
res.push(input[0],input[1]);
console.log(res);

