// S3_FN_03.js
const makeAdder = x => y => x + y;

const add5  = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3));   // 8
console.log(add10(7));  // 17
