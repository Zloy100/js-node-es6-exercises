function sumUntil(nums, threshold) {
  let sum = 0;
  for (const n of nums) {
    if (sum + n > threshold) break;
    sum += n;
  }
  return sum;
}

console.log(sumUntil([1, 2, 3, 4, 5], 7));   
console.log(sumUntil([10, 20], 15));         
