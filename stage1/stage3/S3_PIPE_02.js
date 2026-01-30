// S3_PIPE_02.js
function compose(...fns) {
  return function(initialValue) {
    return fns.reduceRight((value, fn) => fn(value), initialValue);
  };
}

const shout = str => str.toUpperCase();
const exclaim = str => str + "!!!";
const greet = name => `hello ${name}`;

const welcome = compose(shout, exclaim, greet);
console.log(welcome("world"));   // HELLO WORLD!!!
