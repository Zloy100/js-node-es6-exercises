
const cleanNumbers = (strings) => {
  return strings
    .map(s => +s.trim())
    .filter(n => !Number.isNaN(n));
};

console.log(cleanNumbers([" 1 ", "x", "2", "  42  ", "3.14", "hello"]));
