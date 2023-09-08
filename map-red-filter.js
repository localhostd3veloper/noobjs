// const arr = [10, 40, 20, 50, 80, 30, 12031, 123123123];
// const output = arr.reduce((max, cur) => (cur > max ? (max = cur) : max), 0);
// console.log(output);
const apiData = [
  { name: "Gautam Anand", age: 51, education: "Graduate", isActive: true },
  {
    name: "Ram Kumar Sharma",
    age: 23,
    education: "Never Went to School",
    isActive: false,
  },
  {
    name: "Harshal Jain",
    age: 51,
    education: "Graduate",
    isActive: true,
  },
  {
    name: "Siddhart Singh",
    age: 40,
    education: "Post Graduate",
    isActive: false,
  },
];
const list = apiData.map((user) => user.name.split(" ")[0]);
console.log(list);

// Output:
// { 23: 1, 51: 2, 40: 1 }

// const output = apiData.reduce((collector, current) => {
//   if (collector[current.age]) {
//     collector[current.age]++;
//   } else collector[current.age] = 1;
//   return collector;
// }, {});

// const output = apiData.reduce((col, cur) => {
//   if (col[cur.age]) {
//     col[cur.age]++;
//   } else col[cur.age] = 1;
//   return col;
// }, {});

const output = apiData.reduce((collector, current) => {
  // checking if the key already exists
  if (collector[current.age]) {
    // incrementing the value
    collector[current.age]++;
  } else {
    // creating the key first time
    collector[current.age] = 1;
  }
  // returning the collector
  return collector;
}, {}); // taking the initial value as {} to add key values into it.
console.log(apiData.filter((user) => user.isActive));
