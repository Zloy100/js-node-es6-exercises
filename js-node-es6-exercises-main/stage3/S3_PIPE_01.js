// S3_PIPE_01.js
function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((value, fn) => fn(value), initialValue);
  };
}

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const process = pipe(addOne, double, square);
console.log(process(3));   // (3+1)*2*2 = 32
console.log(process(5));   // (5+1)*2*2 = 72
