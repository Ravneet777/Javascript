
const input = [1,4,6,7,2,4,7];

// Second largest number irrespective of its frequency 
// output = 4

let res;
function secondLargest(arr){
  const sorted= [...new Set(arr)].sort();
    return sorted[sorted.length-2];
}

console.log(secondLargest(input));


