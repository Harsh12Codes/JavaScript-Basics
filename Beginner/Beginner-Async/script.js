/*
    CALLBACKS -  callbacks are the functions that are passed as argument to another function so that it execute in that other function 
    
    setTimeout(() => {
      console.log("Hello World");
    }, 2000);
    
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
      console.log("Clicked");
    });


    CALLBACK HELL  ->  callback inside callback inside callback, multiple indented code inside code 
                   -> to solve this problem we use PROMISES
*/

/*
    PROMISES  -> used to solve the problem of callback hell and it is same as promise in real life.
    
    various functions like 
    promise.all  -> then part execute if all are resolve
    promise.any  -> then part execute if any of them are resolve , the first one to resolve is returned
    promise.race -> first one that resolve/reject is returned
    promise.allSettled  ->  everyone returns status and if status is "fullfilled" then the result is returned as value and if it is "rejected" then the reason is returned.
    
    function newsetTimeout(duration) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
      });
    }
    
    newsetTimeout(1000)
      .then(() => {
        console.log("Task 1 Done");
    
        return newsetTimeout(1000);
      })
      .then(() => {
        console.log("Task 2 Done");
    
        return newsetTimeout(1000);
      })
      .then(() => {
        console.log("Task 3 Done");
    
        return newsetTimeout(1000);
      });
    
    Promise.all([
      Promise.resolve("Task 1 Done"),
      Promise.resolve("Task 2 Done"),
      Promise.resolve("Task 3 Done"),
      Promise.resolve("Task 4 Done"),
    ]).then((message) => {
      console.log(message);
    });
    
    const prms = Promise.resolve("Hello World");
    
    prms
      .then((message) => {
        console.log(message);
      })
      .catch((message) => {
        console.error(message);
      })
      .finally(() => {
        console.log("Promise Done !!");
      });
*/

/*
    ASYNC AWAIT ->  we use async and await to do stuff in async way and one after one 
    if we want to do something in parallel we can't use async await

    function getValuewithDelay(value, delay) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(value);
        }, delay);
      });
    }
    
    function getValuewithDelayError(value, delay) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("ERROR !!");
        }, delay);
      });
    }
    
    async function getValue() {
      try {
        const value = await getValuewithDelay("Task 1 Done", 1000);
        console.log(value);
        const value2 = await getValuewithDelay("Task 2 Done", 1000);
        console.log(value2);
        const value3 = await getValuewithDelayError("Task 3 Done", 1000);
        console.log(value3);
      } catch (e) {
        console.error(e);
      }
    }
    
    getValue();

*/
