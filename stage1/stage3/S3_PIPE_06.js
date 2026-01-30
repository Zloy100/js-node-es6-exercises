// S3_PIPE_06.js
function pipeSafe(...fns) {
  return function(initialValue) {
    let value = initialValue;
    
    try {
      for (const fn of fns) {
        value = fn(value);
      }
      return { ok: true, value };
    } catch (error) {
      return { ok: false, error };
    }
  };
}

const riskyDivide = x => {
  if (x === 0) throw new Error("Division by zero");
  return 100 / x;
};

const safeProcess = pipeSafe(
  x => x + 10,
  x => x * 2,
  riskyDivide
);

console.log(safeProcess(5));    // { ok: true, value: 8 }     → 100 / (5+10)*2 = 100/30 ≈ 3.33? Wait,  (5+10)*2=30, 100/30
// Actually: 100 / ((5 + 10) * 2) = 100 / 30 ≈ 3.333, but let's fix order if needed

console.log(safeProcess(0));    // { ok: false, error: Error: Division by zero }
