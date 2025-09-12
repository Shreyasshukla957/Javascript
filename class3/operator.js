// Comparison Operators
// always rsopnd in True or False
let a = 5;
let b = 10;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);


// Loose Equality only compares value  doesn't ask for same data types
// here string '5' is conveted to integer 5 so it's true
console.log('5'== a );
console.log('5'!= a );


// Strict Equality compares value and datatypes both
console.log(a===b);
console.log(a!==b);

//  null==undefined is only true , baaki sab ke liye false
// console.log((null==undefined)); 
// console.log((null===undefined)); false
console.log(null==0); // false kyunki sirf null == undefined k liye true
console.log(null<0);  // false because yaha par null ko number mein convert ho rha h jo ki 0 hota h aur 0 smaller than 0 nahi hota h 

console.log(null>0);   // false because yaha par null ko number mein convert ho rha h jo ki 0 hota h aur 0 smaller than 0 nahi hota h 

console.log(null<=0);  // true because yaha par null ko number mein convert ho rha h jo ki 0 hota h aur 0 less than equal to 0  hota h 

console.log(null>=0); // true because yaha par null ko number mein convert ho rha h jo ki 0 hota h aur 0 greater than  equal to 0 hota h 


// undefined comparison
console.log(undefined==0);// false kyunki sirf null == undefined k liye true

// false , because undefined convert ho rha h number mein toh woh possible nahi toh woh NaN bn jaayega aur NaN 0 se compare nahi hoga to 
console.log(undefined<0); 
console.log(undefined>0); 
console.log(undefined<=0); 
console.log(undefined>=0); 
// isiliye false answer h

// NaN :- Not a Number
console.log(NaN==NaN);
 // false bcoz yha par dono NaN alag h Jab Mohan aur Rohit convert honge number mein toh dono NaN bnenge kyunki String h lekin woh alag NaN bnenge isiliye false aayega...
let str1 = 'Mohan';
let str2 = 'Rohit';

console.log(Number(str1) == Number (str2));

let abc  =  123;
let abc1 = "123";
let abc2 =  123;
// pehle abc == abc1 hua hoga toh abc string ban gya hoga isiliye true aayega  . 
//phir true == abc2 toh false hoga.
console.log(abc==abc1==abc2);


// Ternary Operator
// Conditional just like if and else.
let age3 = 18;
let status1 = (age3>=18) ? 'I can Vote' : 'I cannot vote';

console.log(status1);

// Logical Operator

// && AND
let ans = ( true && true && false);
console.log(ans);
ans = (true && true && true);
console.log(ans);
ans = (false && false && false);
console.log(ans);


// || OR
let ans2 = (true || false);
console.log(ans2);
ans2 = (true || true); 
console.log(ans2);
ans2 = (false || false);
console.log(ans2);

// Working with non booleans in Logical Operator
/* Falsey
undefined
null
0
false
NaN
"" */

// Truthy anything which is not included in falsey
// if both are turthy in logical AND (&&) operator last one is the output bcoz it evaluates from left to right
// AND MEIN DONO TRUTHY RHEGA TOH OUTPUT AAYEGA AUR LAST WALA OUTPUT RHEGA warna ek bi false h toh false wala aajayega

console.log(true && "Shreyas"); // Shreyas is the output
console.log("Shreyas" && true); // True is the Output
console.log(false && "Shreyas"); //False is the Output

// if anyone is truthy in logical OR (||) operator first one is the output bcoz it evaluates from left to right
// OR mein koi ek bhi truthy rhega toh jo pehla rhega woh output ho jaayega warna agar dono false h toh last wala false output aayega
console.log(true || "Shreyas"); // first truthy value
console.log(false || "Shreyas"); // second truthy value
console.log(false || ""); // second falsey value


// Bitwise Operator
// Bitwise operator :- It works on 'bit' level
// AND (&) :- { 0,0 = 0 | 0,1 = 0 | 1,0 = 0 | 1,1 = 1 }
//  OR (|) :- { 0,0 = 0 | 0,1 = 1 | 1,0 = 1 | 1,1 = 1 }
// NOT (~) :- {0 :- 1 , 1 :- 0 }
// XOR (^)(Same elements par'0' deta h warna 1 dega) 
// :- {0,0 = 0 | 1,1 = 0 | 0,1 = 1 | 1,0 = 1}

console.log(4&5);
console.log(4|5);

// Right Shift (>>) , Left Shift (<<)  
// when left shifting any number 'n' times it is multipled by (*2^n)
// when right shifting any number 'n' times it is divided by (/2^n)
console.log( 5 >> 1);
console.log( 5 << 1);
