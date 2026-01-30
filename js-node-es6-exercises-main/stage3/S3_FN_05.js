// S3_FN_05.js
const atLeast = min => n => n >= min;

const atLeast10 = atLeast(10);
const numbers = [3, 12, 8, 15, 7, 20, 9];

const filtered = numbers.filter(atLeast10);

console.log(filtered);  // [12, 15, 20]
