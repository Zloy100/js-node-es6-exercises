const users = [
  { id: 1, name: "Kate", active: true  },
  { id: 2, name: "Mike", active: false },
  { id: 3, name: "Alex", active: true  },
  { id: 4, name: "anna", active: true  },
];

const activeUpperSorted = users
  .filter(u => u.active)
  .map(u => u.name.toUpperCase())
  .sort();

console.log(activeUpperSorted);
