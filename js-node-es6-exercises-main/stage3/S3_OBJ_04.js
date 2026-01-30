// S3_OBJ_04.js
function omit(obj, keys) {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

const config = { port: 3000, host: "localhost", secret: "xyz", log: true };
console.log(omit(config, ["secret", "log"]));
// → { port: 3000, host: "localhost" }
