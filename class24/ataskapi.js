console.log("Hello Coder Army");

function meet(){
    const arr = [2,4,6];
    console.log(arr[0]);
}

function greet(){
    const a = 2 + 3;
    console.log(a);
    meet();
    console.log(a*a);
}

greet();
console.log("Program End");

// pehle yeh pura code call stack mein jaayega usmein ek G.E.C create hota h , ab uske andar 2 phase mein code run hota h 'memory allocation' and 'code run' phase indono phase ki baat hum nahi kr rhe h yeh jaante h , abhi hum working dekh rhe h code ki kaise code chlega.
// G.E.C mein line no 1-16 pura rhega 
// sabse pehle hello coder army print hoga
// 3-6 skip ho jaayega kyunki woh sab function ka part h , phir wapas 8-13 skip ho jaayega woh bhi function ka part h
// line no 15 mein greet ko call kiya gya h ab jaise hi function call hota h , humein pata h ek naya execution context create ho jaata h call stack mein uss execution context mein line number 8-13 ab line number 10 mein 'a' print ho rha h toh '5' print ho jaayega 


// 2nd Example

// console.log("HEllo Coder Army");

// setTimeout(()=>{
//   const a = 2+4;
//   console.log(a);
// },5000);

// let b = 20;
// let arr = [20,30,11];

// for(let i of arr)
//     console.log(i*b);


// // 3rd Example


// console.log("HEllo Coder Army");

// setTimeout(()=>{
//   const a = 2+4;
//   console.log(a);
// },5000);

// setInterval(() => {
//     console.log("I am fast");
// }, 2000);

// let b = 20;
// let arr = [20,30,11];

// for(let i of arr)
//     console.log(i*b);


// // console.log("I am first");

// fetch("https://youtube.com")
// .then(()=>console.log("Hello"));

// console.log("I am last");



// Browser me → setTimeout = Web API ka kaam.
// Node.js me → setTimeout = libuv (C/C++ library) ka kaam.


// JavaScript Engine = Pura system jo JavaScript code ko read, understand, optimize, aur machine code me convert karke execute karta hai.
// Engine ke andar kya-kya hota hai?
// Parser → code ko read karta hai
// Interpreter (Ignition) → code ko jaldi se chalata hai
// JIT Compiler (TurboFan) → code ko fast machine code me convert karta hai
// Garbage Collector → memory clean karta hai
// Call Stack → function execution ka mechanism , web api ko uska kaam handover krdeta h js engine ke kehne par , orders js engine deta h web api ko uska kaam handover krne ka jaise setTimeout , dom , etc...
// Heap → memory jahan objects, arrays store hote hain

// Example engines:
// Chrome / Node.js → V8 Engine
// Firefox → SpiderMonkey
// Safari → JavaScriptCore
// 👉 Engine = pura dimaag + pura system + pura execution environment.



// example interpreter vs jit compiler
// for (let i = 0; i < 1000000; i++) {
//   total += i;
// }


// 🟦 Interpreter ka kaam:
// Loop ko pehli baar quickly run kar deta hai
// Koi optimization nahi
// Just simple execution

// 🔴 JIT Compiler ka kaam:
// Dekhta hai: “Ye loop baar-baar chal raha hai → Hot code!”
// Isko optimized machine-code me convert karta hai
// Next time loop ultra-fast execute hota hai




//  ⭐ Example — Best Explanation
// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 1000);

// console.log("end");



// STEP 1: console.log("start")
// → Call stack me gaya → print → exit

// STEP 2: setTimeout()
// → Web API ko handover
// → “1000ms ka timer set kar do”
// web api isko callback queue mein bhejdega jabtak callstack khaali nahi ho jaata phir jaise hi callstack khali ho jaayega callback queue se callstack mein "eventloop" bhejdega aur callstack run kradega setTiemout ko.
// → Call stack se remove krdo run hone ke baad.


// STEP 4: console.log("end")
// → Call stack me gaya → print → exit
// ⭐ Ab call stack empty ho gaya
// Event Loop activate hota hai:

// ✔ STEP 5: Microtask Queue
//  Microtask Queue bhi Callback queue ki tarah hota h par iske andar promises jaate h aur baaki normal web api ke features jaise dom , setTimeout , setInterval callback queue mein jaate h
