// S3_FN_04.js
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((sum, sq) => sum + sq, 0);

console.log(result);  // 4² + 6² + 8² = 16 + 36 + 64 = 116
