const a = [1, 1, 2, 3, 4, 5, 5];
const letter = new Set(a);
let b = [];
letter.forEach((value) => {
  b.push(value);
});
console.log(b);
