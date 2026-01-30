// S3_OBJ_05.js
function invert(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value in result) {
      if (!Array.isArray(result[value])) {
        result[value] = [result[value]];
      }
      result[value].push(key);
    } else {
      result[value] = key;
    }
  }
  return result;
}

console.log(invert({ a: 1, b: 2, c: 1, d: 3 }));
// → { '1': ['a', 'c'], '2': 'b', '3': 'd' }
