// S3_OBJ_06.js
function groupBy(items, key) {
  const groups = {};
  for (const item of items) {
    const groupKey = item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
  }
  return groups;
}

const products = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "vegetable", name: "carrot" },
  { id: 3, category: "fruit", name: "banana" },
  { id: 4, category: "fruit", name: "orange" }
];

console.log(groupBy(products, "category"));
// → { fruit: [{...}, {...}, {...}], vegetable: [{...}] }
