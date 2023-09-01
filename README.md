# noobjs

## What is JS

_JS is synchronus single-threaded language_

`Synchronus` - It executes its code line by line.
`Single-Threaded` - Executes one line at a time.

### How does JS Works?

Inside an execution context -> Memory and Code

Memory is also called as `Variable Environment`
Code is also called `Thread of Execution`

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

#### Eg- `undefined`

```javascript
var a;
console.log(a === undefined); //true
```

### Not Defined

When JS tries to find a variable that was not found in the initial scan it gives the. imlpies that there was not memory allocated to the variable.

#### Eg - `Not Defined`

```javascript
var a = 10;
console.log(x); //here x is not defined in the scope
```

`Reference error -> x is not defined`

## Temporal Dead Zone -

let us look at this example

```js
console.log(a); // Error
console.log(b); // undefined
let a = 10;
var b = 10;
```

`ReferenceError: cannot access 'a' before initialization`

let and const are **not** on the global object
instead they are stored in a **different memory space than global** called `SCRIPT` and since the `console.log` points to the `global` object it does not find `let a = 10` in it.

##### Example for Temporal Dead Zone

```js
1. let c;
2. const a = 10;
3. if (a === 10) {
4.   c = "Temporal Dead Zone Ended";
5. }
```

Here, the above example shows that until the variable `c` or `a` is assigned any value, it will stay in a special zone called as `Temporal Dead Zone` 💀

### let v/s const v/s var
1. In case of `let` and `const` there are no redeclarations allowed.
2. Not even the console will work 😅


```js
console.log("This will not print");
let a = 10;
var a = 10;
```

`SyntaxError: identifier 'a' has already been declared`

```js
var a = 10;
var a = "Please like this article";
```

No Error is there, redeclarations are allowed in `var`
