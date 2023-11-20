
const input1 = {a:1, b:2, c:3, d:10, e:12}
const input2 = {a:2, e:12, f:6, d:10}

// make an Object which has only prop/value COMMON on on INPUT objects
// output = {d:10, e:12}

let res={};
for (const key in input1){
    if(input1[key]==input2[key]){
    res[key]=input1[key];
    }
}
console.log(res)