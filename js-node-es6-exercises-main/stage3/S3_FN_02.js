// S3_FN_02.js
const people = [
  { name: "Leo", age: 28 },
  { name: "Nina", age: 34 },
  { name: "Max",  age: 19 },
  { name: "Zoe",  age: 25 }
];

const sortedByAge = people.slice().sort((a, b) => a.age - b.age);

console.log(sortedByAge);
// → [{name: "Max", age: 19}, {name: "Zoe", age: 25}, {name: "Leo", age: 28}, {name: "Nina", age: 34}]
