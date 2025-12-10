const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


// .addEventListener has 3 options(event type , callback function , capture)
// by default bubbling is on if you want to turn on capture just write true if you write false bubbling will be kept on , as default it was before bubbling is on whether you write false or nothing.

// Bubbling is On

// child.addEventListener("click",()=>{
//     console.log("child clicked");
// },false)

// parent.addEventListener("click",()=>{
//     console.log("parent clicked");
// },false)

// grandparent.addEventListener("click",()=>{
//     console.log("grandparent clicked");
// },false)


// Capture is On

// child.addEventListener("click",()=>{
//     console.log("child clicked");
// },true)

// parent.addEventListener("click",()=>{
//     console.log("parent clicked");
// },true)

// grandparent.addEventListener("click",()=>{
//     console.log("grandparent clicked");
// },true)


// Bubbling and capturing both 
// 1. Capturing is displayed first
// 2. than bubbling is displayed by deafult bubbling is on if nothing is written 

// child.addEventListener("click",(event)=>{
//     console.log("child clicked");
//     console.log(event.target);
//     // event.target se pata chalta hai user ne kya click kiya.
//     // child trigger kiya kyun ki child par click kiye
    

// },false) //bubbling on

// parent.addEventListener("click",(event)=>{
//     console.log("parent clicked");
//     console.log(event.target);
//     console.log(event.currentTarget);
//     // event.currentTarget se pata chalta hai listener kis par laga hai.
//     // child trigger kiya kyun ki child par click kiye


// },true) //capturing on 

// grandparent.addEventListener("click",(event)=>{
//     console.log("grandparent clicked");
//     console.log(event.target);
//     // child trigger kiya kyun ki child par click kiye



// },false) //bubbling on 




// // Event Delegation
// // Event delegation ek JavaScript technique hai jismein aap ek hi event listener parent (ancestor) element par lagate ho, instead of har child element par alag-alag listener lagane ke.Jab bhi koi event (jaise click) kisi child par hota hai, wo event bubble hokar parent tak pahunchta hai, aur parent ka listener us event ko handle karta hai. Fir aap event object ke event.target property se yeh pata kar sakte ho ki exactly kaunsa child element click hua tha

// const grandparent = document.getElementById("red");
// const parent = document.getElementById("blue");
// const child = document.getElementById("green");

// const ancestor = document.getElementById("ancestor");
// ancestor.addEventListener("click",(event)=>{

// // yha par ancestor ke upar listener laga diya h naa ki upar jaise
// //  (lineno 43 - 69) individually ek ek par jaakar , isse ab hoga yeh ki jab bhi kisi bhi ancestor ke andar ke 'child' element par click karenge toh event.target ki help se btadega kaunsa element ne action trigger kiya , woh hoga aise ki 
// // ex:- maan lete h 'child' par  click kiya gya h , toh bubbling ke thorugh woh child->parent->grandparent->ancestor ke paas jaayega aur pata chal jaayega ancestor ko ki child ne trigger kiya h.
// // ab jab pata chal gya h ki kiske wajah se trigger ho rha h toh ooperation peform kr sakte h apne hisab se jaise body ka colour change krdenge uss colour jaise se jis element par click kiya 
// console.log(event.target);
// // document.body.style.backgroundColor = event.target.id;
// // console.log (event.target.tagName);

// // yha par (background color wale heading) par click kr rhe h toh woh bhi trigger kr de rha h jiske wajah se 'bgc' black jo jaa rha h , kyunki wohbhi ek child h ancestor ka toh hum yha 'if' statement ke through usko exception bna sakte h condition dekar.

// if(event.target.tagName === 'DIV'){
//     document.body.style.backgroundColor = event.target.id;
// }



// });


// Event.stoppropagation is used to stop bubbling and capturing
//  if i don't want my code to use resources (memory or anyother stuff) while using bubbling or capturing , i would use event.stoppropogation  If i'll click on child it will only display child bublling and capturing would stop.



child.addEventListener("click",(event)=>{
    console.log("child clicked");
    // event.target se pata chalta hai user ne kya click kiya.
    // child trigger kiya kyun ki child par click kiye
    console.log(event.target);
    // only child will be displayed as event.target bubbling is stopped
    event.stopPropagation();
    
    

},false) //bubbling on

parent.addEventListener("click",(event)=>{
    console.log("parent clicked");
    console.log(event.target);
    // console.log(event.currentTarget);
    // event.currentTarget se pata chalta hai mein khud kaunsa wala element hu .
    // child trigger kiya kyun ki child par click kiye


},false) //bubbling on 

grandparent.addEventListener("click",(event)=>{
    console.log("grandparent clicked");
    console.log(event.target);
    // child trigger kiya kyun ki child par click kiye



},false) //bubbling on  

















