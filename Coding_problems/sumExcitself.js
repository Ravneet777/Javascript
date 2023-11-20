
const input = [2,7,11,4,-2]

// Create array of Sums: at any index put sum of all elements except that index element
// output = [20,15,11,18,24]

let res=[];
const sum= input.reduce((a,b)=>a+b);
for (const i of input){
    res.push(sum-i);
}
console.log(res);
