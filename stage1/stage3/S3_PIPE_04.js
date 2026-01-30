// S3_PIPE_04.js
const isValidNumber = s => !Number.isNaN(+s);
const toNumber = s => +s;
const double = n => n * 2;
const sum = (a, b) => a + b;

const processNumbers = pipe(
  arr => arr.filter(isValidNumber),
  arr => arr.map(toNumber),
  arr => arr.map(double),
  arr => arr.reduce(sum, 0)
);

const input = ["1", "  2.5 ", "abc", "3", "", "4.0"];
console.log(processNumbers(input));   // 1*2 + 2.5*2 + 3*2 + 4*2 = 2 + 5 + 6 + 8 = 21
