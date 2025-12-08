// theory 
// Javascript "Synchronous single threaded" language hoti h matlab pehle ek line execute kregi phir agla line execute kregi , ek saath multi task nahi kr sakti h.
// javascript mein code "execution context" ke hisab se chalta h jismein 2part hote h 1st Memory , 2nd Code 
// Memory mein variable ko declaration milta h sirf ex:- let x ; var y ; const z.
// 2nd part jo 'Code' h  uske andar inititalization hota h ex:-
//  let x = 10 ; var y = 20; const z = 30; toh yeh 2nd part of code mein initialization hota h aur initialization ke baad code execute bhi issi part mein hota h
// 1st part jo ki Memory h usmein sirf declare hota h lekin jab hum variable ko 'var' datatype se declare krte h tab decalaratio ke time par undefined initialize ho jata h temporarily tab tak jab tak woh 2nd part 'code' mein initialize na ho jaaye , aur const , let jo h woh kuch initialize nahi hote h bas declared rehte h toh unhe uss time tak ke liye  "Temporal Dead Zone" bolte h uske baad jab woh 2nd part "code" mein jab initialize ho jaaynge tab woh temporal dead zone hat jaata h.


// hoisting , sirf ek concept h actual mein aise execute ho rha h ya nahi ho rha h pata nahi kisiko coders ko smjhane ke liye yeh concept ko maan liya gya h ki aisa kuch hota hoga.
//  hoisting yeh karta h ki jo bhi initialized variable hota h jaise yha (ex:- var x = 10 , let y = 10) yeh dono ka execution code (console.log(x);console.log(y)) pehle likha h aur initialized baad mein toh hoisting yeh krega inodono ka declaration scope ko top par krdega  jaise line 13 , 14 , 15 par hua h , sirf declaration krta h initialization matlab x =10 ; jo h woh toh wahi rhega jaha aap rakhe rahenge.

// var x;// iske andar undefined initialize ho gya jaise hi declaration ho gya 'var' mein ; yeh key-value pair mein stored rhega "var:undefined"
// let y; //let ke declaration ke time par yeh temporal dead zone mein chla gya h iske andar kuch nahi h just like 'const'
// const z; //const ke declaration ke time par yeh temporal dead zone mein chla gya h iske andar kuch nahi h just like 'let'

// console.log(x);
// console.log(y);
// console.log(z);
//  x = 10; //printing var datatype before initializing
//  results:- undefined
//  y = 10; //printing let datatype before initializing results:- error
// z = 20; //printing const datatype before initializing 
// results:- error , though const can be declared only once but , aisa maana jaata h ki hoisting concept ko agar maane toh const ko initialize kr sakte h wapas declaration krne ke baad


// let a = 10;
// let b = 20;

// function add(num1,num2){
//     let result = num1 + num2;
//     return result;
// }

// var ans = add(a,b);
// console.log(ans);

// Working internally kaise hoga iss function ka ; jo line 27 se start h.
// two parts mein hoga Execution Context 
// 1st Memory , 2nd Code 
// 1st Memory mein let a aur let b declare hoga jo temporal dead zone mein hai (ex:- a : , b : )ekdum khaali , same const mein bhi yahi hota h ; par  yhi agar var hota toh undefined hota (ex:- a : undefined) dhyan se dekhe toh yeh key-value pair form mein stored h memory ke andar 
// Memory mein dono variable (let a, let b) store hone ke baad ab uske baad agle step mein (function add) par aayenge yha hoga yeh ki add store hoga memory mein jo key-value pair hoga jo aisakuch dikega( add:{" iske andar puracode hoga jo function ka code h" } )
//  (ex:- add:{function add(num1,num2){
    // let result = num1 + num2;
    // return result;
// }
// } )

// last mein Memory mein "var ans" store hoga jo declared hoga ,  par yeh temporal dead zone mein nahi rhega 'let,const' jaise ulta iske andar undefined rhega (ex:- ans : undefined ).

// Itna sab 1st part Memory mein hoga "Execution Context" ke andar.

// 2nd Part of  "Execution Context" Code

// ismein saare values jo declared the 1st part (Memory) mein woh initialized ho jaayenge  (ex:- a : 10, b : 20) phir (function add:{}) par aayega par woh execute nahi hoga kyunkni function call abhi nahi hua h ; lekin function add ke andar pura code hain.

// uske baad function call (var ans = add (a,b)) par aayega aur yha se function call hog aur iske upar wala jo function add hain woh run hoga kyunki usmein code toh memory mein hi store kr liya tha (function add:{}) ke saath.

// iske baad aata h stack ; pehle difference samajh lete h stack aur execution context mein
// execution context ek guide (ya environment) ka role play karta hai jo batata hai ki code ka execution kaise hoga . Jab bhi JavaScript code run hota hai, har function ya global code ke liye ek naya execution context banta hai. Is context ke andar variables, functions, scope chain, aur this ki value store hoti hai, aur ye decide karta hai ki code kis order me chalega aur kis variable ko kaise access karega

// Ye execution context stack (ya call stack) me store hota hai.
// Jab bhi koi function call hota hai, uska execution context stack ke upar push hota hai, aur jab function execute ho jata hai to stack se pop ho jata hai. Is tarah stack manage karta hai ki kis code ka execution pehle hoga aur kis ka baad me.

// Now Stack mein sabse pehle "Global Execution Context " store hota h jo ki kuch alag cheez nahi h , wahi funtion ka pura code h jo line 27 se start ho kar 36 tak h.
// uske baad ek aur execution context bnta h (hamesha ek naya execution context bnega function call ke liye ) , ab woh kis liye bnta h agar hum samjhe toh samajh aayega ki jo code function add ke andar the (function add:{"pura code iske andar"}) woh bhi toh run honge unke liye bhi ek "execution context" bnega jiske andar 2 part hoga 1st Memory , 2nd Code 
// phir ussi tarah num1 , num2 jo declared h woh store honge , phir let result jo declared h woh store hoga uske baad return result store hoga
// 2nd part 'code' execution hoga saare variables initialized ho jaayenge aur result aajayega.



// the stack would look somethinglike this 
//  +-----------------------+
// |      add(10, 20)      |  <-- Function Execution Context (add)
// +-----------------------+
// |        GEC            |  <-- Global Execution Context
// +-----------------------+

//          Stack
//         _______
//        |       |  <-- Top (add(10, 20) context)
//        |_______|
//        |       |  <-- Bottom (Global Execution Context)
//        |_______|

// phir jab return result ho jaayega toh stack mein se yeh execution context pop ho jaayega phir console.log(add) hone ke baaad Global Execution Context Pop ho jaayega.

// +-----------------------+
// |                       |  <-- 1st POP ,Function Execution Context (add)
// +-----------------------+
// |        GEC            |  <-- 2nd POP , Global Execution Context
// +-----------------------+

//          Stack
//         _______
//        |       |  <-- Top (add(10, 20) context)
//        |_______|
//        |       |  <-- Bottom (Global Execution Context)
//        |_______|


// 2nd Example function call before function definition , still there is no error because internal working of Execution Context

// greet ();

// function greet (){
//     console.log("hello");
// }

// How Execution Proceeds
// 1. GEC Creation and Execution
// When your script runs, the Global Execution Context (GEC) is created first.

// The GEC has two phases:

// Memory phase: All variables and function declarations are hoisted and stored in memory.

// Execution phase: The code is executed line by line.

// 2. Encountering greet();
// During the execution phase of the GEC, when the engine reaches greet();, it does NOT execute the code of greet inside the GEC.

// Instead, the engine creates a new Function Execution Context (FEC) for greet.

// This new context is pushed onto the call stack and becomes the active context.

// 3. Function Execution
// The code inside greet runs inside its own execution context, not inside the GEC.

// When greet finishes, its context is popped off the stack, and control returns to the GEC.

// At the start (memory phase):
// GEC: {
//   greet: function greet() { ... }
// }

// Code Execution Phase (GEC)
// 1. greet();  // <-- This triggers creation of a new execution context for greet and then 


// Call Stack:
// +-----------------------+
// | greet() context       |  <-- Running now
// +-----------------------+
// | Global context (GEC)  |  <-- Always at the base
// +-----------------------+

// // After greet() finishes:
// Call Stack:
// +-----------------------+
// | Global context (GEC)  |
// +-----------------------+


















