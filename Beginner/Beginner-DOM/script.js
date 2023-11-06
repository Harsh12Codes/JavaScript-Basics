/*
    NORMAL , ASYNC , DEFER

    NORMAL -- normally first the html page is downloaded and it execute the page like if some img or etc, need to take time to download it will download in background and it will keep parsing the further HTML
    but when javascript is used first javascript is downloaded and then executed then parse further HTML


    ASYC - when asyc is used the javascript is downloaded in background and when the download is completed it execute even the parsing of further HTML is going on


    DEFER - when defer is used the javascript is downloaded in background and when the download is completed , it wait for the HTML to finish and then execute that javascript 


    WINDOW 

    it is used to refer to the page , this object have all the usefull functions and data of browser

*/

// const element = document.createElement("div");
// element.innerText = "Hello Harsh !!";
// element.className = "first-div";
// document.body.appendChild(element);
// const divele = document.getElementsByTagName("div");
// divele[0].style.color = "red";

// for (let i = 0; i < 5; i++) {
//   const element2 = document.createElement("div");
//   element2.innerText = "this is a class";
//   element2.className = "div-class";
//   document.body.appendChild(element2);
// }

// const divclass = document.getElementsByClassName("div-class");
// const divarray = Array.from(divclass);
// divarray.forEach((div) => {
//   div.style.color = "green";
// });

// const dataattr = document.querySelectorAll(".div-class");
// dataattr.forEach((div) => {
//   div.style.color = "black";
// });

// const atag = document.querySelector("[anchor-tag]");

// atag.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("something clicked !!");
// });

// eventlisteners ---> click, focus, blur, mouseenter, mouseleave, mouseover
// window ---> for window we also have resize eventlistener

// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {      // in arrow functions this means the entire window
//   console.log(this);
// });

// btn.addEventListener("click", function (e) {  // in function this represent the element on which it is defined in this case it is a button
//   console.log(this);
// });

// const btns = document.querySelectorAll("button");

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const prev = parseInt(btn.dataset.count);
//     btn.dataset.count = prev + 1;
//   });
// });

const grandParent = document.querySelector("#grand-parent");

grandParent.style.color = "green";

const parents = grandParent.children;
const parentArray = Array.from(parents);
parentArray.forEach((parent) => {
  parent.style.color = "red";
});

const parentOne = grandParent.children[0];
const parentTwo = parentOne.nextElementSibling;
const parentOneAgain = parentTwo.previousElementSibling;
const grandParentAgain = parentTwo.parentElement;

const grandParent2 = parentOne.closest("#grand-parent"); 
