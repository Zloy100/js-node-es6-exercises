function mergeDefaults(defaults, overrides) {
  return { ...defaults, ...overrides };
}

const defaults = { theme: "light", fontSize: 16, debug: false };
const overrides = { theme: "dark", debug: true, extra: "hello" };

console.log(mergeDefaults(defaults, overrides));
