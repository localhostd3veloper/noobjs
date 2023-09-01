function first() {
  var a = 10;
  function second() {
    console.log(a);
  }

  return second;
}

let getFunction = first();

/* after this line, instance of 
  first() function is popped out of 
  the call stack */

getFunction(); // outputs: 10;
