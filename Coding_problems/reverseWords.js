let str="this is zoo";
// Reverse the words of the string

function reverseWords(st){
   return st.split("").reverse();
}

const arr=str.split(" ");
let str1="";
const res=[];
for (const i of arr){
    let str2=reverseWords(i);
    const arr2=str2.join("");
    str1+= arr2 + " "
    console.log(arr2)
}

console.log(str1.substring(0,str1.length-1));