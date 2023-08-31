# noobjs
## Namaste Javascript Tutorial Repo

JS is synchronus single-threaded language
How does JS Works?

Inside an execution context -> Memory and Code

Memory is also called as Variable Environment
Code is also called Thread of Execution

## Hoisting

JS Code Hoisting is when a javascript code executes then even before the execution of the first line of the code it scans the entire code for declarations of functions & variables and Allocates memory for it in the Global Execution Context as
variables as undefined and copies the complete function.

```javascript

var x = 10; // x will be undefined before execution
function getName() {
    console.log("Hello World");
} // gets copied entirely

```