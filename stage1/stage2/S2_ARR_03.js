
function chunk(arr, size) {
  if (size <= 0) return null;
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunk([1,2,3,4,5,6,7], 3));
