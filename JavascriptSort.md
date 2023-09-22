# Is Javascript Sorting Simple?

Let's just admit that we all have gone to stackoverflow and just copy and pasted the javascript `sort()` method.

Well I hope after reading this article, you might stop doing it and start writing your own `custom` javascript `sorting` methods.

## Basics

- To begin with any function, we need to understand the very basic of the `sort()` method.

- It is an `Higher Order Function`, we'll know how.

- As the name suggests, it _sorts the elements in the array_.

**_How?_**

### Working of `sort()`

I love explaining with examples.

```js
const array = ["Harry", "John", "Bob", "Zayn", "Chris"];
console.log(array.sort()); // [ 'Bob', 'Chris', 'Harry', 'John', 'Zayn' ]
```

This works exactly like `sort()`, except that it works only like this when we are sorting strings.

**_This is the default behaviour of Javascript Sort() function - It converts the `elements` to `string` and compares the `INSIDE` value(i.e. the UTF-8 values) and returns the sorted array_**

For UTF-8 reference [check this cheatsheet!](https://www.charset.org/utf-8)
Alternatively, you may try running the below script

```js
console.log("a".charCodeAt(0)); // 97
```

So in the above example it resulted us the correct output because it actually looked up the UTF-8 values of the elements.

Suppose we have the same `array` variable

```js
array.forEach((element) =>
  console.log(element.charCodeAt(0), " ", element.charAt(0))
);
```

This would actually tell us what is the value that was compared in real like this.

```js
// console output
66   B
67   C
72   H
74   J
90   Z
```

Hence, Now when we actualy try to sort an array full of numbers using `sort()` function, we don't get the EXPECTED result.

Example

```js
const array = [54, 133, 96, 0, 31, 101];
console.log(array.sort());
```

This will result an array like this - `[0, 101, 133, 31, 54, 96]` and the reason is stated above.

## Solution

If you were reading upto here carefully, you must've remembered that sort is an higher order function.
which basically means that it takes a `callback()` function as an argument.

- The callback function takes `two arguments(a,b)`
- `a` is the first element of the array and `b` is the second element.
- It should return any of the three values: `(-1, 0, 1)` according to our requirements.

```js
if negative: a < b
if positive: a > b
if zero: a == b // let it be as it is.
```

### Writing our first compare function

It would be as simple as writing basic `if else`.

```js
function compareFn(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
```

Let's just put our `compareFn()` in action!

```js
const numbers = [54, 133, 31, 96, 0, 31, 101, 101];

function compareFn(a, b) {
  if (a < b) return -1; //BOOKMARK
  else if (a > b) return 1;
  else return 0; // means its equal
}

console.log(numbers.sort(compareFn)); // [ 0,  31,  31,  54, 96, 101, 101, 133 ]
```

**_See? we did it!_**
We actually sorted an array with numerical values!

But wait do we have to write the whole above logic just to create a `sort()` function that sorts numbers?
Javascript cannot be this harsh to us right?

It's not.

### Our Final Touch to `sort()` function.

Well if we look closely to this line in our compare function

```js
if (a < b) return -1;
```

NOTE:

> This condition can only occur when we try to subtract a larger number from a smaller number that would result in a negative number.

Read that again!

So if we subtract `b` from `a`, this actually solves our all of the problems.

Listen.
We wanted a `negative`, a `positive` and a `zero` right?

```js
const a = 10;
const b = 100;
console.log(a - b); // would be negative
```

Also,

```js
const a = 100;
const b = 10;
console.log(a - b); // would be positive
```

And if they are equal then it would actually gives us zero.

This actually will sort our array again in an `ASCENDING` order with a much cleaner code.

We just cracked it!

Instead of writing whole logic we could just write our compare function like this.

```js
function compareFn(a, b) {
  return a - b; // does all the job...
}
```

Now when we look at the code it should look like this

```js
const numbers = [54, 133, 31, 96, 0, 31, 101, 101];

function compareFn(a, b) {
  return a - b; // b - a for descending order for obvious reasons.
}
console.log(numbers.sort(compareFn)); // [ 0,  31,  31,  54, 96, 101, 101, 133 ]
```

And since we know it just have a single line we can use an arrow function instead.

```js
const nums = [6, 3, 8, 2, 5, 1];
console.log(nums.sort((a, b) => a - b)); // [1,2,3,5,6,8]
```

Thank you for reading upto here,
If you really find this useful, share this blog with your friends, your co-workers or anyone in your family who loves or hates javascript!
