
// //Defined Function
// function saymyname (){

//     console.log('Shreyas Shukla');
    
// }

// // function call
// saymyname();


// //defination of function
// function printcounting(){

//     for(let num = 0 ; num < 11 ; num++){
//         console.log(num);
        
//     }

// }

//  //function call
// printcounting();



// //Number is the parameter of function defination
// function printnumber (number){
//     for(let num = 0 ;num <= number ; num++){
        
//         console.log(num);
        
//     }

// }


// // 21 is the argument of function call
// printnumber(21);


// function getaverage (num1,num2){
//     let num3 = (num1 + num2)/2;
//     console.log(num3);
    

// }

// getaverage(10,12);


// Returning Function call

// function defination
//number1 , number2 parameter take input from argument.
function sum(number1,number2){ 
    totalsum=number1+number2;
    console.log(totalsum);
    

}

// function call
sum(10,20);//10,20 are argument delivered in parameter
sum(20,30);

// Function declaration method 
// function getmyname (firstname , lastname){

//     let fullname = firstname + " " +  lastname ;
//     return fullname ;
//      unreachable code after return 
//     let a = 10;
//    console.log(a);
   

// }

// let ans2 =getmyname('Shreyas' , 'Shukla')
// console.log(ans2);


//  other way of returning to function call 
function Multiply(no1,no2){
    // totalmultiply=no1*no2;
    // console.log(totalmultiply);
    return no1*no2;
    
}

let Multiplication = Multiply(10,12);
console.log(Multiplication);

// console.log(Multiply(10,12));

//  2ND wAY Function Expression by storing function in variable 
// getmultiplication stack mein store rhega aur uske andar function ka address store rhega aur function heap memory mein store rhega
let getmultiplication = function (a,b){
    return a*b;
}

let ans4 = getmultiplication(10,12);
console.log(ans4);


// // Arrow Functions
// return likhne ki bhi jarurat nahi h agar ek line ka code h
let getExp =  (x,y) =>  x**y;

console.log(getExp(2,4));

// OR 

let getdivide = (a,b) =>{
    ans5 = a/b;
    return ans5;
}

console.log(getdivide(10,2));

// OR

// for single parameter rahe toh bracket lagane ki bhi jarurat nahi h 
const cube = number => number*number*number;

console.log(cube(3));


// rest operator use krke kitne bhi variable without argument mein btaye input le sakte h
// Spread: [🍎, 🍌] → 🍎 🍌  pura array jo single unit ki tarah h usko khol kar individual bana diya h
// Rest:   🍎 🍌 🍊 → [🍎, 🍌, 🍊]  saare individual value ko array mein single unit ki tarah rakh diya h

const sumnow = function (...number){
    // for loop sum nikal skta hu
    console.log(number);
    
}

sumnow(2,3,4);
sumnow(3,45,6,34,6,87);

let about = {
    nam : "Shrey",
    age:19,
    amount:348394304,
    address:"Mumbai",
}

// sirf destructure wala part paramter mein liya argument mein toh pura object aaya tha lekin sirf destructure wala part liya h.
function fun({nam , age , amount , address}){
    console.log( age , nam , amount , address);
    
}

fun(about);//argument mein toh object de diya gya h
 

// Where Rest Syntax is Used:sabko array mein collect krta h 
// Function parameters to accept a variable number of arguments as an array.
// Array destructuring to collect remaining elements into a new array.
// Object destructuring to collect remaining properties into a new object.


// Where Spread Syntax is Used:spread operator sirf iterable cheezon par kaam krta h direct object par kaam nahi krega 
// Function calls to expand an array or iterable into individual arguments.
// Array literals to copy or merge arrays.
// Object literals to copy or merge objects.

// examples of rest and spread 
// collect the rest ; let go the spread

const fruits = ["apple","banana","orange"]

function fruitss (first , ...fruits){ //first will have apple because it was removed individually by spread operator during calling the function and on the other hand this .(..fruits) will collect banana and orange in an array this is rest operator
    console.log(first,fruits);
}

fruitss(...fruits); //this fruits will unpacked all the fruits apple , banana , orange individually this is spread operator

// yeh error throw krega kyunki directly spread operator normal object par kaam nahi krta 
// let namu = {
//     jeans:"Louis",
//     shirt:"Gucci",
//     handkerchief:"prada",
//     shoes:"Nike",
//     glasses:"Versace",
// }

// function namu1(shirt,nam){

//     console.log(shirt,nam);

// }


// namu1(...namu);

