
function unique(values) {
  const result = [];
  for (const val of values) {
    if (!result.includes(val)) {
      result.push(val);
    }
  }
  return result;
}

console.log(unique([1, 2, 2, 3, 1, "a", "a", 5]));
