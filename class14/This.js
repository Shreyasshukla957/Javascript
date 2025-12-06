// global object ek Object h
// Chrome Browser : Window name h 
// Node js mein iska naam : Global h 
// 'globalThis' is a name which can be used anywhere irrespective of the platform

// console.log("Hello World");//console.log(); aata kaha se h yeh bhi ek functn ki tarah h "hello world" argument pass toh kiya hua h , yeh bhi kahi se aarha hoga
// Math.random();//yeh Math.random() aa kaha se rha h , yeh bhi toh kahi se aaya hoga 
// setInterval ();//setinterval bhi ek function jaisa h , yeh bhi toh kahi se aarha hoga
// console.log(Math.random());
// console.log(globalThis.Math.random());
// console.log(globalThis);
// Yeh sab kahi na kahi se aate h , aur uss jagah ko hi hum Global Object bolte h woh bhi ek Object hi h ; jaise c++ mein iostream hota h library jiske andar in-built functn hota h waise hi yeh sab Global Object mein hote h , par global object bohot broad purposes k liye use hota h usse library nahi keh sakte h 'iostream' ya kisi aur jaisa
// Global Object ko hum alag alag enviornment mein alag alag name dete h 
// Chrome Browseer : Windows name h  , Node js mein iska naam : Global h

// even var a = 10; mein 'a' bhi global object ka part h , let-const global object ke part nahi hote h
// agar Global Object ke kisi bhi property ko access krna h toh window."propertyname" likhne ki jarurat nahi h seedha property name le kar istemaal kr sakte h , Global Object bhi ek object h agar koi bhi property use krte h hum object ki toh uska syntax hota h
//  object.propertyname par yha windows."propertyname" jarurat nhi h


// Chrome mein 
// 'this' keyword agar global scope mein use ho rha h toh woh 'window' jo globalobject ka naam h chrome mein usse point krta h
// console.log(this===window);
// var c = 20;
// console.log(this.c); // is same as console.log(c) bcoz (this === window) in global scope and (window.c) is same as 'c' window jo h woh object hain aur c uska property jaise ki humne line 17 mein padha h

// node js mein 
// console.log(this);// this jo h empty object ko point krta h jisse "Modules's exports object " kaha jaata h


// Inside a function Chrome mein
// Non-strict mode
// by default javascript Non-strict mode mein chalta h
// Regular function ke andar 'this' keyword wapas 'Window' (globalObject) ko hi point krta h 

// function greet(){
//     console.log(this);
// }

// greet();


// Strict mode
// strict mode woh mode hota h jaha rules&regulations bohot high ho jaate h javascript likhne ke compared to non-strict mode ; latest "ECMAA" jo h woh sab strict mode use krte h from ECMAScript 5 (ES5)
//strict mode mein 'this' keyword 'undefined' result dikhata h

// "use strict";
// function meet(){
//     console.log(this);
// }

// meet(); 


// 'This' keyword Inside a object in chrome
// 'this' keyword ussi object ko point krta h jiss object mein woh define ho , aur phir woh uss obj ke property ko bhi access kr sakta h (ex:- this.name) 


const obj = {
    name:"Shreyas",
    age:20,
    greet: function(){
        console.log(this.name);//directly hum property yha print nahi kr sakte ex:- clg(name) par hum clg(this.name) kr sakte h kyunki 'this' keyword ussi object ko point krta h jiss object mein woh define ho 
    }

}

obj.greet();

// Calling 'this' keyword by window in Chrome
// yha par jab this keyword ko call krte h window se (ex:- window.meet())toh woh window ko point krta h jaise upar jab (ex:- object.greet()) ne call kiya tha tab object ko point kiya aur jab yha (ex:- window.meet()) ne call kiya toh window/globalObject ko point kiya.


function meet(){
    console.log(this);
}

meet();
// window.meet();

// Arrow functions ka sabse bada difference yahi hai ki arrow function ka apna khud ka 'this' nahi hota. Ye apne parent (enclosing) scope se 'this' inherit karta hai, isko hum lexical scoping of 'this' bolte hain
// window  // (browser mein)  
// ya  
// undefined  // (strict mode ya Node.js mein)
// speed ek arrow function hai.
// Arrow function ka apna khud ka 'this' nahi hota.
// Ye this ko apne parent (lexical) scope se uthata hai.
// Yahan parent scope hai global scope (kyunki object ke andar arrow function likha hai, lekin object ka scope count nahi hota toh yha global scope count hoga isiliye 'window' ko point krega kyunki ).
// Isliye, this ya toh window (browser mein) ya undefined/empty object '{}' (strict mode/Node.js) hoga, kabhi bhi object nahi hoga.

// let object={
//     naam:"Ram",
//     umar:19,
//     speed: ()=>{
//         console.log(this);
//     }
// }

// object.speed();



// greet ek normal function hai, toh jab aap object1.greet() call karte ho, us samay this object1 ko point karta hai.

// ab ek arrow function hai jo greet ke andar define hua hai.

// Arrow function ka apna this nahi hota, toh woh this ko apne parent (yani greet function) se inherit karega.

// greet function ka 'this' already object1 hai, toh arrow function ka bhi this wahi ho jayega—yani object1 aur yeh sirf object1 ko ussi condition mein point krega jab 'this' , function (greet) ke andar ho jo object (object1) mein h , function ko chhodkar direct property bana jaise , direct arrow function (ab) inside object1 without nested of greet function phir yeh object1 ko point nahi krega yha isiliye kr rha h kyunki uska parent function (greet) h jo object (object1) ke andar h.
// let object1 = {
//     nama: "Ram",
//     age: 12,
//     greet: function() {
//         let ab = () => {
//             console.log(this);
//         }
//         ab();
//     }
// }

// object1.greet();

// object1  // pura object1 print hoga


// Inside a Constructor or Class


// Block Scope vs Functional Scope

// Block scope ka matlab hai ki koi variable sirf us block { } ke andar hi accessible hai, jahan par woh declare hua hai. Block ka matlab hota hai koi bhi curly braces wala part, jaise if, for, while, ya koi bhi { } ke andar ka code.if/else statements ; for/while loops ; function bodies ; ya manually likha gaya koi bhi { ... } block
// Agar aap variable ko let ya const se declare karte ho kisi block ke andar, toh woh variable sirf us block ke andar hi kaam karega, bahar nahi dikhega but var se declare kiya gaya variable block scope ko follow nahi karta. Agar aap var ko kisi block ke andar declare karte ho, toh woh variable us block ke bahar bhi accessible hota hai.

// if (true) {
//     var x = 10;
// }
// console.log(x); // Output: 10 (block ke bahar bhi accessible)

// Agar aap let ya const use karte ho, toh woh variable sirf block ke andar hi accessible hota hai, bahar nah

// if (true) {
//     let y = 20;
//     const z = 30;
// }
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined




// Function scope ka matlab hai ki koi variable sirf us function ke andar hi accessible hai, jahan par woh declare hua hai. Function ke bahar woh variable kaam nahi karega.
// Jab aap kisi variable ko 'var' , 'let' , 'const' se function ke andar declare karte ho, toh woh variable pura function ke andar kahin bhi accessible hota hai, chahe woh kisi block (if, for, { } etc.) ke andar ho ya function ke top par ho.

// Nahi, let aur const block scope follow karte hain, na ki function scope.
// Jab aap let ya const ko kisi block (jaise { } ke andar, if, for, etc.) mein declare karte ho, toh woh variable sirf usi block ke andar accessible hota hai.
// Chahe wo block function ke andar hi kyu na ho, let aur const ka scope us block tak hi limited rahega, function ke baaki parts mein accessible nahi hoga.
// Jabki var function scope follow karta hai:
// Agar var ko kisi block ke andar declare kiya jaye, toh bhi woh pura function ke andar kahin bhi accessible hota hai.


// function example() {
//     if (true) {
//         var a = 10;    // function scoped
//         let b = 20;    // block scoped
//         const c = 30;  // block scoped
//     }
//     console.log(a); // 10  (accessible hai)
//     console.log(b); // Error: b is not defined (block ke bahar nahi)
//     console.log(c); // Error: c is not defined (block ke bahar nahi)
// }
// example();





// 2nd Example
// Function ke bahar teeno accessible nahi ho sakte agar function scope mein declared h toh.

// function demo() {
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// console.log(a); // Error: a is not defined
// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined


// console.log(x); // Error: x is not defined (function ke bahar nahi dikhega)
// console.log(i); // Error: i is not defined (function ke bahar nahi dikhega)


// Theory
// ki kyun 'let' aur 'const' global object ke part nahi h 'var' ki tarah, uska reason h agar woh dono bhi global object ka part bn jaate toh toh global scpe mein har jagah accessible hote 'var' ki tarah , even after getting declared in block scope 'var' global scope mein accessible h yeh hum nahi chahte the ki 'let' aur 'const' ke saath ho isiliye yeh dono global object ke member nahi h 
//  ek cheex yeh h ki jab 'var' 'let' 'const' yeh teeno agar function scope mein declare ho toh yeh 'let' 'const' yeh dono toh waise bhi global scope ke part nahi h par 'var' bhi functional scope mein declare hone ke baad gobalscope mein accessible nahi hoti h , jaha woh block scope mein hone ke baad globalscope mein accessible ho rhi thi.


