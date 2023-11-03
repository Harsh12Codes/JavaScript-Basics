/*
  HOISTING

  In Javascript code is executed from top to bottom means if anything is initilized after it's use then there will be error but due to hoisting , javascript take all functions from the program and then process further with code

  but arrow functions are not evaluated as they are taken as variables
*/

/* 
  SCOPING

  In Javascript,we can access the data that is part of bigger scope in which our current scope is present 
  but from outside we can't see inside


  function calc(name) {
    let result = "Hello " + name + a;
    console.log(result);
  }

  let a = " yadav";
  calc("Harsh");
*/

/*
  CLOSURE

  In javascript,we get the most recent value of the variable of the outerscope in innerscope 

  function print(variable) {
    return function (variable2) {
      console.log(variable);
      console.log(variable2);
    };
  }

  print("harsh")("yadav");
  
  */

/*
  PASS BY REFERENCE VS VALUE
  
  let a = 10;
  let b = "Hi";
  let c = [1, 2];
  let d = c;
  d.push(3);
  
  console.log("a :" + a);
  console.log("b: " + b);
  console.log("c: " + JSON.stringify(c));
  console.log("d: " + JSON.stringify(d));
  
  let e = [1, 2];
  let f = [1, 2];
  console.log(a === b);
  
  const person = { name: "Harsh" };
  person.age = 25;
  console.log(person);
*/

/*
  ARRAY METHODS

  const a = [1, 2, 3, 1, 2];

  a.forEach((Number, index) => {
    console.log(Number, index);
  });

  const newA = a.filter((Number) => {
    return Number > 1;
  });

  const newA2 = a.map((index) => {
    return a[index] * 2;
  });

  const newA3 = a.find((number, index) => {
    return index > 4;
  });

  const newA4 = a.some((number) => {
    return number > 2;
  });

  const newA5 = a.every((number) => {
    return number > 0;
  });

  // console.log(newA5);

  const items = [
    { price: 10 },
    { price: -10 },
    { price: 20 },
    { price: -20 },
    { price: 30 },
    { price: -30 },
  ];

  const s = items.reduce((sum, number) => {
    console.log(number.price);
    return sum + number.price + 2;
  }, 0);

  console.log(s);

  const istrue = a.includes(1);

  console.log(istrue);
*/

// using BACKTICK to make STRINGS
const first = "Harsh";
const last = "Yadav";
console.log(`${first} ${last}`);

// THIS and NEW keywords

function user(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const user1 = new user("harsh", 20);
console.log(user1);
