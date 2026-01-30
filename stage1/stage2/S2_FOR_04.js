function countOccurrences(values) {
  const count = {};
  for (const val of values) {
    count[val] = (count[val] || 0) + 1;
  }
  return count;
}

console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));


console.log(countOccurrences([1, 1, 2, 2, 2, 3]));
