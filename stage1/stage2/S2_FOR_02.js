function findFirstEven(nums) {
  for (const n of nums) {
    if (n % 2 === 0) return n;
  }
  return null;
}

console.log(findFirstEven([3, 7, 9, 4, 11]));  // 4
console.log(findFirstEven([1,3,5,7]));         // null
