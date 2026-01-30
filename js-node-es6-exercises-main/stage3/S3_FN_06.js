// S3_FN_06.js
function mapValues(obj, fn) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = fn(value);
  }
  return result;
}

const scores = { alice: 85, bob: 92, carol: 78 };
const doubled = mapValues(scores, n => n * 2);

console.log(doubled);
// → { alice: 170, bob: 184, carol: 156 }
