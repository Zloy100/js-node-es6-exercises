function stats(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return null;
  
  let min = nums[0];
  let max = nums[0];
  let sum = 0;
  
  for (const n of nums) {
    if (n < min) min = n;
    if (n > max) max = n;
    sum += n;
  }
  
  return { min, max, avg: sum / nums.length };
}

console.log(stats([4, 8, 1, -3, 6]));
