/* Write a program to print 1 to 5 
with an interval of one second*/

//what we usually do
function printNumber() {
  for (var index = 1; index <= 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
}

printNumber();

// it can be fixed with using a let inside the for loop
// what if the interviwer asked to do it just by using var only?

function printUsingClosure() {
  for (var index = 1; index <= 5; index++) {
    function closure(index) {
      setTimeout(function () {
        console.log(index);
      }, index * 1000);
    }
    closure(index);
  }
}

// printUsingClosure();

// explained in the readme.

