



// // CONDITIONAL 
// // if-else
// if (true) {
//   console.log("I'm Shreyas");
// }
// else {
//   console.log("I'm not Shreyas");
// }

let age = 10 ;
if(age > 17){
    console.log("Eligible for voting");
}
else{
    console.log("Not Eligible");
}

// // if else if 

// let alpha = 10;
// if (alpha === 10) {
//   console.log("I'm Shreyas");
// }

// else if (alpha === 18) {
//   console.log("I'm not Shreyas");
// }

// else if (alpha === 15) {
//   console.log("I'm Devansh")
// }

// else {
//   console.log("Hii");
// }

// // Switch Case

// let beta = 3;
// switch (beta) {
//   case 1: console.log('A')
//     break;
//   case 2: console.log('B')
//     break;
//   case 3: console.log('C')
//     break;
//   case 4: console.log('D')
//     break;
//   default: console.log('E')
// }

let date = new Date();
// .getDate aaj ka date btata h , .getDay aaj kaunsa din h woh btayega agar tuesday h toh 2 , wednesday h toh 3 etc..
switch(date.getDay())
{
     case 0:
     console.log("Sunday");
     break;

     case 1:
     console.log("Monday");
     break;

     case 2:
     console.log("Tuesday");
     break;

     case 3:
     console.log("Wednesday");
     break;

     case 4:
     console.log("Thursday");
     break;

     case 5:
     console.log("Friday");
     break;

     case 6:
     console.log("Saturday");
     break;

     default:
     console.log("Not a Valid day"); //agar switch case mein input 6 ke bahar aaya toh yeh chal jaayega
}




// // For loop

// for(let num = 0 ; num < 5 ; num++){
//     console.log('Shreyas');

// }

// for (let num2= 1 ; num2 <=  10; num2++) {
//    console.log(num2);

// }

// for (let num3 = 5; num3 > 0; num3--){
//    console.log(num3);

// }

// one of the reason js slow h ki usko har i ke liye naya memory allocate krna padega
// for(let print = 0 ; print < 5 ; print++){
//     console.log("Printing Printtttt");
// }


// Nested loop
for(let i = 0 ; i < 6 ; i++){
    for(let j = 1 ; j <= 5 ; j++ ){
        console.log(j);
    }
}



// // While
// let num4 = 1;
// while (num4 < 11) {
//     console.log('Shreyas');
//     num4++;

// }

// do-while loop
// atleast one time chalta h !
// let j  = 1;
// do{
//     console.log('Shreyas');
//     j++;

// }while (j<1) 



// //( While)Break 
// let num5 = 1;
// while (num5 < 11) {
//     if(num5===3){
//         break;
//     }
//     console.log('Shreyas');
//     num5++;

// }

// // (While) Continue
// let num6 = 1;
// while (num6 < 11) {
//     if(num6===3){
//         continue;
//     }
//     console.log('Shreyas');
//     num6++;

// }


// // Break
// for(let i = 1 ; i<= 6 ; i++){
//     if(i===4){
//         break;
//     }
//    console.log(i);

// }

// // Continue
// for(let i = 1 ; i<= 6 ; i++){
//     if(i===4){
//         continue;
//     }
//    console.log(i);

// }


//  in this code the reason it causes infinite loop because as soon as the i==3 continue statement runs and what happens is that it directly travels to the while code not going to i++ instead therefore i is still i==3 and there is no updation .
// in continue statements what happens as soon as the continue statement is triggered it directly moves to the loop condition rather than leaving it's loop and going on the next line which is i++. 
// to correct this programm it's better to update before executing continue statement so that once it is updated it is not stuck in the infinte loop
// let i = 1 ;
// while(i<5){


//     if(i==3){
//         // i++
//         continue;
//     }
//     else{
//         console.log('Hii');

//     }
//     i++;
// }


// Scope (Global , Local(functional) , Block )

// Global scope can be accessed anywhere in code

// let a = 10;
// var b = 20;
// const c = 30;

// function happy() {

//   // variable can be declared and accessed only in local/functional area
//   let a = 10;
//   var b = 20;
//   const c = 30;

//   console.log(a);
//   console.log(b);
//   console.log(c);

// };

// happy();

// declaration in local scope cannot be accessed out of the local scope
//result will be error 
// console.log(a);

// var z = 30;//yha bhi declare hogya 
// var z = 50;//yha bhi declare hoga 

// if (true) {
//   let x = 100;
//   const y = 200;
//     //  var isss scope ke bahar bhi accessible rhega 
//   var z = 300;//yha bhi declare hogya 
//   var z = 50;//yha bhi declare hogya isiliye yeh khatarnak hain block scope {} ko nahi maanta hain , lein local(functional scope ko maanta h)
// }

// var block scope nahi maanta aur var kitne baar bhi declare ho sakta h
// Agar tum var ko kisi { } block (jaise if, for, while) ke andar likho, to wo bahar bhi accessible rahega.
// console.log(z); // ✅ 300
// console.log(x); // ❌ Error
// console.log(y); // ❌ Error

// ---------------------------------------


// // console.log(amount);//not accessible before declaration
// // console.log(assets);//not accessible before declaration
// console.log(money);// accessible before declaration was problem with var but results undefined.

// let amount = 10;
// var money = 20;
// const assets = 30;

let arrays = [10,20,30,40];
for(let i = 0 ; i < arrays.length ; i++){
    console.log(arrays[i]);
    
}

let obj = {

    name: "Rohit",
    age :30,
    amount:420,
    city:"Mumbai",

}

// Accessing values
const values = Object.values(obj);
console.log(values); //stores in arrays 


// Accessing keys
const keys = Object.keys(obj);
console.log(keys); //stores in arrays
console.log(typeof(keys));



// Accessing values
for(let i = 0 ; i<keys.length;i++){
    console.log(obj[keys[i]]);//ex:- it is same as (obj[name]) then obj[age] , obj [amount] , obj[city];

    
}




let namm = {
    dance:"Salsa",
    food:"Pasta",
    aadmi:"Sasta",
    mein:"Hasta",
    bacha:"KHasta",
}

// Keys Storing
let kstore = Object.keys(namm);
console.log(kstore);//array form mein store h
console.log(typeof kstore); //type of object hi aayega kyun ki array bhi object hi aata h proto ke wajah se aur indexing store ke wajah se par store ab yeh .keys ke wajah se array form mein krega jo isko iterable bna dega

// Values Storing
let Vstore = Object.values(namm);
console.log(Vstore);//type of object hi aayega kyun ki array bhi object hi aata h proto ke wajah se aur indexing store ke wajah se par store ab yeh .values ke wajah se array form mein krega jo isko iterable bna dega

// Both storing using Entries
let Estore = Object.entries(namm);
console.log(Estore);//type of object hi aayega kyun ki array bhi object hi aata h .__proto__ ke wajah se aur indexing store ke wajah se par store ab yeh .entries ke wajah se array form mein krega jo isko iterable bna dega

console.log(Estore[1]);//ans food:pasta kyunki index 1 par hain

// Iterable bnane ke liye

for(let keys = 0 ; keys < kstore.length ; keys++){
    console.log(kstore[keys]);
}

// OR

// yha meine galti ki (i < kstore) kiya jo galat h ; kyunki yaha 'i' iterate kstore ke length jitna krega (i < kstore.length)
for(let i = 0 ; i < kstore.length ; i++){
    console.log(namm[kstore[i]]); // same as namm["keys"[0]] , ["keys"[1]] , ["keys"[2]] etc.. till end.
}


















































