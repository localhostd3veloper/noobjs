var a = 10;
{
  var a = 100; // this 'a' shadows the global scoped 'a'
}
console.log(a); // results 100

let b = 10;
{
  let b = 100;
}
console.log(b); // results 10

let c = 1;
{
  let c = 10;
}
console.log(c); // results 1

let d = 100;
{
  // var d = 10; // Error! Illegal Shadowing
  let d = 10
}
