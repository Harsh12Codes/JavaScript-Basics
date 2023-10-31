// console.log("Hello World");

// let favoriteNumber = 3;
// favoriteNumber = 4;
// console.log(favoriteNumber);

// let a = 10;
// let b = 10.5;
// console.log(typeof a);
// console.log(typeof b);

// let a = 1.5;
// let b = 2;
// let c = 3;
// console.log((a + b) / c);

//  STRINGS TYPE
// let a = "Hello";
// let b = "World";
// let Name = "Harsh";

// console.log(a);
// console.log(typeof a);
// console.log(a + " " + b);
// console.log("Hello my name is " + Name);

//  BOOLEAN TYPE
// let a = true;
// let b = "true";
// console.log(typeof a);
// console.log(typeof b);
// let c = false;
// console.log(a && c);
// console.log(a || c);
// console.log((false && false) || true);
// console.log(!a);

// NULL and UNDEFINED
// let a = undefined;
// console.log(a);
// let b = null;
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);
// let c;
// console.log(typeof c);

//  VARIABLE COMPARISON
// let a = 1;
// let b = 2;
// console.log(a == b);
// b = 1;
// console.log(a == b);
// let c = null;
// let d = undefined;
// console.log(c == d);

// FUNCTIONS
// function sayHello() {
//   console.log("Hello world");
// }
// sayHello();

// function sayName() {
//   console.log("Hello Harsh !!");
// }
// sayName();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(2, 3);

// function myName(name) {
//   console.log("My name is " + name);
// }
// myName("Harsh");

// function printName(n) {
//   console.log(n, n);
// }
// printName();

// function whatName(name) {
//   return "My name is " + name;
// }
// let name = whatName("Harsh");
// console.log(name);

//  PASSING FUNCTIONS vs ARGUMENTS
function tellName(name, callback) {
  console.log(callback(name));
}
function appendName(name) {
  return "Hello " + name;
}

tellName("Harsh", appendName);

function tellName2(name, callback) {
  callback("Hello " + name);
}

tellName2("Harsh", function (variable) {
  //anonomyous function
  console.log(variable);
});

let name = function (n) {
  return n + " is a number";
};

console.log(name);

let arrowFunc = (a, b) => {
  //arrow functon
  return a + b;
};

console.log(arrowFunc(1, 2));

let sum = (a, b) => a + b;
let printHi = (name) => "Hi " + name;
let hiArrow = () => console.log("Hi javascript");
console.log(sum(1, 4));
console.log(printHi("Harsh"));
hiArrow();
