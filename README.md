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


## Undefined vs Not Defined

Well as javascript creates a global execution context,
It allocates memory to all the declared variables & functions
by default, it allocates `undefined` to it. and when the variable assignment line is executed it assigns the respective value to it.

and when JS tries to find a variable that was not found in the initial scan it gives the
`Reference error -> x is not defined`

## Next
