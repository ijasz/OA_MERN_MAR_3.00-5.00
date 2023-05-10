// Function Statement

// function greeting() {
//   console.log("hello sunil");
// }

// greeting();

// Function Expression

// let a = function greeting() {
//   console.log("hello sunil");
// };

// Named Function

// let a = function greeting() {
//   console.log("hello sunil");
// };

// a();

// anonymous Function

// let a = function () {
//   console.log("hello sunil");
// };

// a();

// Arrow Function

// let a = () => console.log("hello sunil");

// a();

// IIFE

// (() => {
//   console.log("IIFE");
// })();

// First Class Function ?

// Higher Order Function

// function greet(name) {
//   console.log(name + " " + "hello");
// }

// function sayHello(c) {
//   c("sunil");
// }

// sayHello(greet);

function sum(...arr) {
  let output = 0;
  for (const i of arr) {
    output += i;
  }
  return output;
}

console.log(sum(2, 456, 4));

console.log(sum(2, 2, 5, 7));

console.log(sum(2, 2));
