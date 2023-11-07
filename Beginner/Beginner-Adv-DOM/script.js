/*
  const URL = "https://jsonplaceholder.typicode.com/posts";

  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.map((data) => data.title));
    });

  async function fetchTitle(URL) {
    const response = await fetch(URL);
    if (response.ok) {
      const dataJson = await response.json();
      const data = dataJson.map((data) => data.title);
      console.log(data);
    } else {
      console.log("CAN'T FETCH");
    }
  }

  async function postData(URL) {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Learning to POST",
      }),
    });

    const post = await response.json();
    console.log(post);
  }

  fetchTitle(URL);
  postData(URL);

 */

/*

  EVENT LOOP ; 

  main thread --> seperate thread 
  like those async function are shifted to seperate thread 

  first the main thread complete and then one after one the seperate thread run
  
  first all sync function of main thread then all the async of seperate thread
  
  if we used promises they will run before the seperate thread tasks but after the all sync functions of main thread
  
  ** NEED TO WATCH MORE ON THIS

*/

/*
  EVENT DELEGATION 
  
  const btn = document.querySelectorAll("button");
  
  document.addEventListener("click", () => {
    console.log("Document Clicked");
  });
  
  document.body.addEventListener(
    "click",
    () => {
      console.log("Body Clicked");
    },
    { capture: false },
  );
  
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("Button Clicked");
    });
  });
  
  document.addEventListener("click", (e) => {
    console.log(e.target.matches(".btn1"));
    if (e.target.matches("button1")) {
      console.log("Button 1 clicked");
    }
  });
*/

/*
  LOCAL STORAGE  |     COOKIES       | SESSION STORAGE
  -----------------------------------------------------
  10MB           | 4KB               | 5MB
  Never Expires  | Manual Expiration | Expire(tab close)
  Client         | Client/Server     | Client
  Easy           | Hard              | Easy

  .setItem -> used to add or update the data
  .getItem -> to access the storage
  
  localStorage.setItem("Name", "Harsh Yadav");
  sessionStorage.setItem("Age", "25");
  
  console.log(localStorage.getItem("Name"));
  console.log(sessionStorage.getItem("Age"));
  
  const date = new Date(9999, 0, 1).toUTCString();
  document.cookie = `name=Kyle expires=${date}`;
*/

