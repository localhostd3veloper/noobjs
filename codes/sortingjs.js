// const array = ["Harry", "John", "Bob", "Zayn", "Chris"];
// // Lets sort and console this array
// console.log(array.sort());

// array.forEach((element) =>
//   console.log(element.charCodeAt(0), " ", element.charAt(0))
// );

// console.log("a".charCodeAt(0)); // 97

const num = [54, 133, 31, 96, 0, 31, 101, 101];
const numbers = [3, 4, 6, 2, 9, 0, 1];
function compareFn(a, b) {
  //   if (a < b) return -1;
  //   else if (a > b) return 1;
  //   else return 0; // means its equal
  return b - a;
}

console.log(numbers.sort(compareFn));
// [ 0,  31,  31,  54, 96, 101, 101, 133 ]
