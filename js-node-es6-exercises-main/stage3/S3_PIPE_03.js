// S3_PIPE_03.js
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const normalizeSpaces = str => str.replace(/\s+/g, " ");

const normalize = pipe(trim, toLower, normalizeSpaces);

console.log(normalize("   Hello    World   how   are   you  "));
// → "hello world how are you"
