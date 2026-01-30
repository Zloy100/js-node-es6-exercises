function sumNested(matrix) {
  let total = 0;
  for (const row of matrix) {
    for (const num of row) {
      total += num;
    }
  }
  return total;
}

const example = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(sumNested(example));          
console.log(sumNested([[10], [20], []])); 
console.log(sumNested([]));               
