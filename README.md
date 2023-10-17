# Introduction
- Well, we all start somewhere to start learning `JavaScript`, I wish this kind of beginner's guide would be available for me to get the very basics of JS.

- If you are not new to javascript, this will be a perfect read to brush up your skills or building a stronger foundation.

Enjoy Reading 
## What is Javascript

_JS is synchronous single-threaded language_

`Synchronous` - It executes its code line by line.
`Single-Threaded` - Executes one line at a time.

### How does JS Works?

- Javascript works inside an execution context,
they have 2 components namely `Memory` and `Code`

- Memory is also called as `Variable Environment`
- Code is also called `Thread of Execution`

## Hoisting

- JS Code Hoisting is when a javascript code executes then _even before the execution_ of the first line of the code it scans the entire code for declarations of functions & variables 
- Allocates memory for it in the `Global Execution Context` as variables/identifiers as `undefined` and creates a reference in case of `functions`.

```javascript
var x = 10; // x will be undefined before execution

function getName() {
  console.log("Hello World");
} // gets copied entirely
```

## Undefined vs Not Defined

- Well as javascript creates a global execution context,
- It allocates memory to all the declared variables & functions
- By default, it allocates `undefined` to it. and when the variable assignment line is executed it assigns the respective value to it.

### Eg `undefined`

```javascript
var a;
console.log(a === undefined); //true
```

### Not Defined

When JS tries to find a variable that was not found in the initial scan it gives the. implies that there was not memory allocated to the variable.

#### Eg `Not Defined`

```javascript
var a = 10;
console.log(x); //here x is not defined in the scope
```
`ReferenceError: x is not defined`

## Temporal Dead Zone -

let us look at this example

```js
console.log(a); // Error
console.log(b); // undefined
let a = 10;
var b = 10;
```

`ReferenceError: cannot access 'a' before initialization`

`let` and `const` are **not** on the global object
instead they are stored in a **different memory space than global** called `SCRIPT` and since the `console.log` points to the `global` object, it does not find `let a = 10;` in it.

### Example for Temporal Dead Zone

```js
1. let c;
2. const a = 10;
3. if (a === 10) {
4.   c = "Temporal Dead Zone Ended";
5. }
```

Here, the above example shows that until the variable `c` or `a` is assigned any value, it will stay in a special zone called as `Temporal Dead Zone` 💀

### let v/s const v/s var

1. In case of `let` and `const` there are no re declarations allowed.
2. Not even the console will work 😅

```js
console.log("This will not print");
let a = 10;
var a = 10; // Redeclaration of identifier 'a'
```

Resulting in
`SyntaxError: Identifier 'a' has already been declared.`

```js
var a = 10;
var a = "Please like this article";
```

No Error is there, re declarations are allowed in `var`

### How to avoid temporal dead zone?

_- Always put your declrations on the top of the file so that as soon as it starts executing it will get all the variables declared._
_- By doing this we can shrinking the Dead Zone Window close to zero by moving all the declarations at the top._

## Block in Javascript

Block is a set of lines covered by `{}` to provide it as a single statement.

### Example

```js
if (true) console.log("Single Statement");
```

That's the reason we dont need Curly Braces `{}` in `if condition` because it's a **Single Statement**
We use `{}` to provide a block, to have multiple statements

### Example

```js
if(condition){
  line1;
  line2;
  ...
} else {...}

function hello(){
 line1;
 line2;
 ...
}
```

## Scopes in Block v/s Global

`let` & `const` are block scoped and `var` is global scoped.

### How?

Example again! Let's say we execute this code

```js
{
  var a = 10; //global
  let b = 20; //block
  const c = 30; //block
}
```

### Proof

![Browser Console Proof](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jygv5xqj7lwd6n6rer52.jpg)

## Shadowing

It is a concept of js where a variable declared using `var` hides the global scoped variable

```js
var a = 10;
{
  var a = 100; // this 'a' shadows the global scoped 'a'
}
console.log(a); // results 100
```

But `let` and `const` works differently because they do not exist outside the current scope

```js
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
```

### Illegal Shadowing 😵‍💫

It is when we try to scope a `let` declared variable using a `var`.

```js
let a = 100;
{
  var a = 10; // Error! Illegal Shadowing
  let a = 2; // works just fine!
}
```

`SyntaxError: Identifier 'a' has already been declared`

## Closures 😶‍🌫️

A function bundling with its lexical scope is closure.

It's easy with an example

```js
function first() {
  var a = 10;
  function second() {
    console.log(a);
  }

  return second;
}
...
let getFunction = first();

/* after this line, instance of 
first() function is popped out of 
the call stack */
...
getFunction(); // outputs: 10;
```
Theoretically it should not work as the identifier `a` needs to be outside the scope BUT when the `second()` function is returned it comes with its lexical scope as well. That's what exactly closure is.


## Tricky Interview Question on setTimeout and Closures

> Problem Statement - Print numbers from 1 to 5 with an interval of 1 second each.

You might get the confidence that this is a simple question and will come up with a code looking like this 👇

```js
for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

Above code would go wrong [(why?)](#identifying-the-problem-and-the-fix) by printing 6 in each line. and can be fixed by just using a `let` instead of a `var`

### What if?

The interviewer asked you to do it with `var` only?

Relax don't sweat out. I'll tell you what to code and explain it how it works.

Here's the code that you're interested in 😆
with the explaination

```javascript
for (var i = 0; i <= 5; i++) {
  // used var
  function closure(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
    closure(i);
  }
}
```

### Identifying the problem

- Well the problem with the previous code using `var` was js maintains an execution context and the way the `setTimeout()` works is it stores the callback function and attaches a timer to it and goes to the next line.

- as the variable `i` does not exists in the callback function it points to the outside reference of `i` from the `for` loop.

- Now it creates 5 copies of functions with the timer and now by the timer expires js does not wait, `for` loop ends. it is just too late. the value of `i` becomes `6` at last.

### Fixing the problem

#### Fix 1: using let declaration

We have discussed above that `let` is block scoped, the answer lies within that line.

> When we use the `let` it creates separate blocks for its memory allocation. whereas in case of `var` all 5 `functions` were pointing to the same memory space available in the global execution context

#### Fix 2: using closures or functions

This will actually provide them a new copy of `i` in it everytime the `setTimeout()` was called

## Types of Writing Functions

### Function Declaration

```js
function hello() {
  console.log("Like This Blog and star the repo");
}
```

### Function Expression

```js
const callAPI = async function () {
  const data = fetch("https://somesite.io/get/data/1232");
  return data;
};
```

### Parameters v/s Arguments

```js
function greet(name) {
  // identifier name is a parameter
  console.log(`Hello ${name}`);
}

greet("Gautam"); // "Gautam" is an Argument
```

### First Class Functions

- functions having functions in their `arguments`.

- The ability of functions to be used as values and be able to return and pass as `arguments` to another `function`.

```js
function first(doesSomething) {
  doesSomething();
}

first(() => {
  console.log("hello World");
});
```

### Callback Functions in JS
These functions are sent in the arguments of another functions and are used respectively whenever needed,

```js
setTimeout(function () {
  console.log("Timer");
}, 5000);
function x(y) {
  console.log("x");
}

x(function y() {
  console.log("y");
});
```


### Arrow Functions

- These functions are introduced in ES6 or EcmaScript 6 (2015)
- They just allow us to write shorter syntaxes

#### Before

```js
function incrementCounter() {
  count++;
  setData("");
}
```

#### After
```js
const incrementCounter = () => {
  count++;
  setData("");
};
```
Above method allows us to write functions without using the `function` keyword.

---

If you liked reading till here. please like this blog and go to [github](https://www.github.com/localhostd3veloper/noobjs) for the codes and please star the repository.

