try {
  {
    let x = 10;
  }
  console.log(x);
} catch (e) {
  console.log("let is not accessible outside the block");
}

try {
  {
    var y = 20;
  }
  console.log("var works:", y);
} catch (e) {
  console.log(e.message);
}

// var is function-scoped, not block-scoped
