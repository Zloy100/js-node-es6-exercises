function get(obj, path, fallback = undefined) {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return fallback;
    }
    current = current[key];
  }
  
  return current === undefined ? fallback : current;
}

const data = {
  user: {
    profile: {
      name: "Alex",
      age: 30
    },
    active: true
  }
};

console.log(get(data, "user.profile.name"));      // "Alex"
console.log(get(data, "user.profile.email", "N/A")); // "N/A"
console.log(get(data, "user.stats.visits", 0));   // 0
