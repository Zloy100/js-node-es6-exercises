var a = "hello";
let b = 42;
const c = true;

console.table([
  { name: "a", value: a, type: typeof a },
  { name: "b", value: b, type: typeof b },
  { name: "c", value: c, type: typeof c }
]);
