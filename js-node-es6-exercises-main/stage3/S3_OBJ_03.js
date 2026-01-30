// S3_OBJ_03.js
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

const person = { name: "Mia", age: 25, city: "Berlin", job: "dev" };
console.log(pick(person, ["name", "age", "country"]));
// → { name: "Mia", age: 25 }
