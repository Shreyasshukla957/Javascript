let num1 = 232; //Number
let num2 = new Number (232) ; //object
let num3 = new Number (232) ; //object
console.log(num1==num2); // True because ek Number h aur ek Object toh object wala number mein convert hoga aur phir dono ki value check hogi jo same hai.
console.log(num1==num2); //False because dono object h toh dono direct compare honge aur dono ne different address store kiya h heap memory ka kyunki dono object h toh dono ne address store kiya hoga par different. 
console.log(num2);
console.log(typeof(num2));

let num = 233.44;
console.log(num.toFixed(1)); // Gives number after decimal , asked for (1) = 233.4
console.log(num.toPrecision(3)); //// Gives number how much digit  , asked for (3) = 233
console.log(num.toPrecision(2));
console.log(num.toExponential(1));
console.log(typeof num.toString());
console.log(num.valueOf());

// Math
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.floor(Math.random()*10));  //Generate Random number from 0 <= value < 1


// floor and Ceil
let num10 = 23.55;
console.log(Math.floor(num10));
console.log(Math.ceil(num10));

console.log(Math.floor(Math.random()*10)+1); //Generate Random number from 1 to 10

console.log(Math.floor(Math.random()*10)+11); //Generate Random number from 11 to 20

// console.log(Math.floor(Math.random()*10)+11)


// min = 40 , max = 50;
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// 0-10 printing using formula (this formula can print any random number within the range given by myself by proving maximum and minimum) 
 console.log(Math.floor(Math.random()*(10-0+1)+0));

// LUDO printing 1-6 using formula given 
console.log(Math.floor(Math.random()*(6-1+1)+1));


