
const input = [3,5,7,11,15,17]

// Missing first odd number
// output = 9

let res;

for (let i=0;i<input.length-2;i++){
   if(input[i+1]-input[i]!==2){
   res=input[i]+2;
   break;
   }
}
console.log(res);


