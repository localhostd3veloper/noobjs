const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise1 Resolved");
  }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 Resolved");
  }, 40000);
});

async function handlePromise() {
  console.log("Inside Function");

  const val1 = await promise1;
  console.log("After Promise!");
  console.log(val1);

  const val2 = await promise2;
  console.log("Hello2");
  console.log(val2);
}

handlePromise();
