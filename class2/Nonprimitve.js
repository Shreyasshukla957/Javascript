// Reference type - non-primitive datatype
// Objects
// Array
// Functions


// Arrays
let arr = [10, 20, 30, 'Shreyas'];
console.log(arr);

// Object is collection of key value pairs
let obj = {

    myname: "Shreyas",
    phnno: 9372932738,
    backaccnt: 72938923023873,
    Cllg: "SN College",

}

console.log(obj);

// Function
let fun = function () {
    console.log('Hii Mera naam Shreyas Hain');
    
}

fun();
console.log(typeof(fun));

// type Conversion
// It's a true
let ar  = "10";
let num = Number(ar);
console.log(typeof(num));

let bool = true;
let num2 = Number (bool);
console.log(num2);
console.log(typeof(num2));


// Not a Number
let account = "100xs";
console.log(Number(account));
let bal = "200s";
console.log(Number(bal));
let x2 = undefined;
console.log(Number (x2));

// It's A Zero
let x1 = null;
console.log(Number(x1));

// Converting in String , the result will be in String " ".
let ax = 20;
console.log(String(ax));

let ax2 = true ;
console.log(String(ax2));

// It's Boolean

let abc= "Abc";
console.log(Boolean(abc));

let abcd= "";
console.log(Boolean(abcd));

let abcde= "  ";
console.log(Boolean(abcde));



// Operators

let number  = 10;
let number2 = 2;

// Arithmetic operator
console.log(number+number2);
console.log(number-number2);
console.log(number*number2);
console.log(number/number2);
console.log(number%number2);
console.log(number**number2);

// According to precedence
// Divide Multiply
// Subtract Addition
// Left to Right
console.log((((10*3)-9)+12/3));
// 30-9+4
// 25

// Modulus Gives Remainder
console.log(10%4);

// Unary Operators
// Pre Increment and Decrement
let num6 = 12;
console.log(++num6);

let num7 = 12;
console.log(--num7);

// Post Increment and Decrement
let age = 10;
console.log(age++);

let age2 = 10;
console.log(age2--);


// Assignment Operators
let a = 5;
let b = 10;
a+=10;
console.log(a);
a-=10;
console.log(a);
a*=10;
console.log(a);
a/=10;
console.log(a);














































