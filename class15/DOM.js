// DOM :- Document Object Model yeh kya karta h ?
// Jab bhi koi HTML file browser me load hoti hai, browser us HTML page ko DOM (Document Object Model) bana leta hai.
// DOM ek tree structure hota hai jismein har HTML element (jaise <div>, <p>, <h1>, etc.) ko ek object ke roop mein browser ki memory mein store kiya jata ha
// Is DOM tree ko JavaScript ke through access, modify, add, ya remove kiya ja sakta hai, jis se web page dynamic ban jata hai.
// DOM hi woh object hai jiske andar web page ka data (each element) object form mein(ex:- Chrome)browser  mein stored hota hai. aur is object mein data key-value pairs mein stored h aur yeh manipulate ho sakte h jaise hum, object ke properties ko manipulate krte h object mein using JS.
// window.document krne par pure web page ka access mil jaata h 

// // Document Object Model (DOM) Tree.
// Winodow
// └──Document
//   └── html
//     ├── head
//     │   ├── meta
//     │   ├── meta
//     │   ├── title
//     │   └── ... (other head elements)
//     └── body
//         └── div.root
//             ├── h1#first.header1
//             ├── h2#second.header1
//             └── ul#third.header1
//                 ├── li (CN) 
//                 ├── li (HTML)
//                 ├── li (CSS)
//                 └── li (JS)


// Theory
// there are several properties which we use to access and manipulate HTML elements in DOM using JS.
// Properties like id, className, innerHTML, tagName, and style let you get or set information about an element directly in JavaScript
// These properties are not stored in the HTML attributes themselves but are part of the DOM element object created by the browser
// ex:- ke liye <h1 id="first" class="header1">Hello Coder Army</h1> ke andar getElementById nahi hota.
// getElementById sirf document object (DOM) ke paas hota hai, kyunki wo DOM tree ka root object hota hai , aur getElementById  andar koi id nahi hota h bas yeh id search krta h DOM ke andar jab
//  "objectname".getElementId("idname") likhte h.
// same getElementsByTagName(tagName) , getElementsByClassName(className) etc.

// Ex:- <h1 id="first" class="header1">Hello Coder Army</h1>

// {
//   tagName: "H1",
//   id: "first",
//   className: "header1",
//   innerHTML: "Hello Coder Army",
//   children: [], // No child elements inside
//   parentNode: /* reference to parent node */,
//   attributes: {
//     0: { name: "id", value: "first" },
//     1: { name: "class", value: "header1" }
//   },
//   // ...other properties and methods
// }

// // HTMLCollection example
// const elems = document.getElementsByClassName("header1");
// console.log(elems.length); // number of elements
// console.log(elems[0]); // first element

// // Object example
// const obj = {name: "John", age: 30};
// console.log(obj.name); // "John"

// hum HTMLCollection isiliye use krte h kyunki jab humein koi manipulation krna ho toh usse htmlcollection ke through (ex:- getElementbyId , getElementsByClassName etc)uss cheez ko identify kr sakte h aur object mein save krne se usse baar baar use krsakte h
// document.getElementsByClassName("header1") → ye ek HTMLCollection deta hai.
// const obj = document.getElementsByClassName("header1"); → ye us HTMLCollection ko ek variable mein save karta hai.

// --------------------IMPORTANT FOR REVISION-------------------
// short steps to understand
// 1. jaise hi webpage load hota h browser mein
// 2. by default dom bnta h by browser
// 3. dom ke andar hierarchy set hoti h explained line no (8)
// 4. uske baad hum elements dhundhte h hierarchy mein using htmlCollection (ex:- getElementbyId) 
// 5. jab dhundh lete h , hum usse kisi object mein store kr lete h (ex:-const obj = document.getElementbyId("IdName")) 
// jaise hi store hogya ab uss object mein manipulation kr sakte h. 

// Accessing Element:

// 1.
//  Method: document.getElementById(id) iss use krke hum kisi bhi 'id' ko access krsakte h .
// ex:- const obj = document.getElementById(id); now we can access it , obj.id , and we can manipualte as we do in object
//  "objectname.propertyname" -> obj.id overhere.

// ---------------------------------------------------------------------

// 2.
// Method: document.getElementsByClassName(className) iss use krke hum kisi bhi 'class' ko access kr sakte h ; ismein par multiple class access ho sakta h unlike 'id' kyunki alag elements mein same class exist kr sakte h isiliye ek class ko access krenge toh baaki sab class bhi present rhenge isiliye agar sirf individual class ko krna rhega toh hum array jaise index use kr sakte h 
// ex:- const object = document.getElementsByClassName(className)
// object type krne par multiple classes aajayenge aisi dikhenge.

// HTMLCollection(3) [h1#first.header1, h2#second.header1, ul#third.header1, first: h1#first.header1, second: h2#second.header1, third: ul#third.header1] 
//  agar same name h class ke toh , individual class jo chahiye uske liye hum type kr sakte h
// object[0] or object[1] or etc.