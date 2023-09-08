# Map, Filter and Reduce in JS

---

## What are these?

- These are the `higher order functions` of javascript.
- A higher order function can be defined as a function inside another functions.
- These functions are used to transform an `Array` and returns new `Array` as the result.

we will use this array for all the examples

```js
const arr = [10, 40, 20, 50, 80, 30];
```

## map( )

Goes through each and every value of the array and do specified task.

It takes a callback function and returns the result

> let us add +10 to every element in the array

```js
function addTEN(element) {
  return element + 10;
}
console.log(arr.map(addTEN)); // [20,50,30,60,90,40]
```

This may be the first time you have seen someone using `map` like this.

Well, this approach is called writing map using `anonymous arrow functions`.

```js
const res = arr.map((val) => val + 10);
console.log(res); // [20,50,30,60,90,40]
```

## filter( )

As the name suggests it `filters`.

### Filters what?

It filters the elements of the array which `satisfy` the given predicate or condition (function) and returns the same.

It also takes a `callback` function

> Let us filter all the elements greater than or equal to 50

```js
const result = arr.filter((val) => val >= 50);
console.log(result); // [50,80]
```

OR we may write it like this

```js
const result = arr.filter(function isGreaterThanHalf(val) {
  return val >= 50;
});
console.log(result); // [50,80]
```

## reduce( )

It actually does not reduce anything!
The name itself is very confusing.

### Then what is reduce?

Used in such a places when we have to take the `whole array` and get the result as a `single element` from that array.

Like

- Finding the sum of each element in the array
- Finding the largest or smallest element
  It all results in a single value.

> Before we jump into the code we are going to implement one of the above example without using `reduce` or the non-functional way.

```js
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}
/* Two things to learn from above code
    1. Single Statement does not require any curly braces {}
    2. That += is same as sum = sum + arr[i];``
    GREAT RIGHT?
*/

console.log(findSum(arr)); // 230
```

> Now, How we can transform the above logic and write a `reduce` function instead? (the easier way).

The `reduce()` function takes two parameters.

1. `callback(collector,currentValue)`
   1.1 `collector` - this is the variable where the final value will be stored.
   1.2 `currentValue` - the current value which is being iterated.
2. initial value for collector

```js
const output = arr.reduce(function (collector, current) {
  collector = collector + current;
  return collector;
}, 0); // this zero(0) is the initial value for our sum to be stored in.
```

And when you google some solution you may see this type of example on `stackoverflow` which most of you didn't understood and just copy pasted the code.

```js
const output = arr.reduce((col, cur) => (col += cur), 0);
```

### Lets find the maximum in an array using reduce( )

```js
const output = arr.reduce(function (maximum, current) {
  if (current > maximum) maximum = current;
  return maximum;
}, 0);
console.log(output); // 80
```

> NOTE: We have taken the second parameter or the initial value of `maximum` as 0 because we have assumed that the `array` does not have any `negative` integers, otherwise we would have taken the `first` element as the `maximum`.

The most complex but `aesthetic` way to write the same example will be

```js
const output = arr.reduce((max, cur) => (cur > max ? (max = cur) : max), 0);
console.log(output); // 80
```

## Real Life Examples using Map, Filter and Reduce

For `more complex` examples we are taking this `array` which sort of looks like a data coming right from an API.

```js
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
```

> Find a list to get all the first names from apiData

### map( ) tricky question

```js
const list = apiData.map((user) => user.name.split(" ")[0]);
console.log(list); // [ 'Gautam', 'Ram', 'Harshal', 'Siddhart' ]
```

The `split(" ")` method splits the list into various parts or arrays wherever it finds a space
hence the name became an array like this `['Gautam','Anand']` and to access its first element we added `[0]`.

### reduce( ) tricky question

> Write reduce function such that we should get all of the ages and thier occurences.

```js
// Output:
{ 23: 1, 51: 2, 40: 1 }
```

> Its a very good question

```js
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
console.log(output);
```

I think the comments are pretty self explainatory. Still in case if you are having trouble understanding in here, try running the same in your IDE.

## Chaining filter( ) and map( )

Lets have a look at this last example where we have to find all the names of the people who are active.

### Lets create a filter( )

```js
const result = apiData.filter((user) => user.isActive === true); // or just user.isActive
console.log(results);
```

This will provide us the `Array` of `Objects` which contains all the active users not the `Names`

```js
// OUTPUT:
[
  {
    name: "Gautam Anand",
    age: 51,
    education: "Graduate",
    isActive: true,
  },
  {
    name: "Harshal Jain",
    age: 51,
    education: "Graduate",
    isActive: true,
  },
];
```

to get the names we will chain the `filter()` with `map()`.

```js
apiData.filter((user) => user.isActive).map((user) => user.name); // [ 'Gautam Anand', 'Harshal Jain' ]
```

That's it for this reading, if you liked reading up till here please give it a HEART.