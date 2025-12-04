let obj = {
    name:"Shrey",
    age:19,
    gender:"Male",
    city:"Mumbai",

};

let one = {
    namu : "Raju",
    age : 23,
    gender : "male",
    dISTRICT : "Gorakhpur",
}

// for in loop , I can iterate over keys with an object
// 1. obj.key
// Yeh hamesha object ke andar "key" naam ki property/key dhundhta hai.
// Yani, yeh "key" ko ek string maan leta hai.
// Agar object me "key" naam ki property nahi hai, toh result undefined aayega

// V.S

// 2. obj[key]
// Yeh key variable ke andar jo value hai, usko property name maan kar dhundhta hai.
// Yani, agar key = "name" hai, toh obj[key] ka matlab obj["name"] ho gaya.


// let key jo h variable h usmein saare key ki value store h 
// ex:- let key = "name" phir next baar update hokar key = "age" phir etc
for(let key in obj)
{
    console.log(key , obj[key]);//obj.key nahi use krsakte explanation line no.18;
    
}

for(let k in one){

    console.log(k,one[k]);

}

// Object.keys in array form mein keys ko store krta h
console.log(Object.keys(one));
console.log(Object.keys(obj));

let one2 = Object.create(one);
let obj2 = Object.create(obj);
one2.study = "BSCIT";
one2.id=123456;
obj2.money = 420;
obj2.id= "Rooh";

console.log(one2);//yeh sirf one2 ke key and values dikhayega agar one ke properties bhi access krna h jo ki one2 mein hain because of Object.create tph one2."one ke properties ka naam daalna padega"
console.log(one2.dISTRICT);//aise access kr sakte h , iss method mein 
console.log(obj2);//only obj2 key and values will be displayed but it does have obj1's data but to display obj1 data we will command obj2.'keyname of obj1'; ex:- obj2.name , obj2.age etc;
console.log(obj2.name);
console.log(obj2.age);

// but when using for-in loop it will display inherit data (keys,values) from obj1 in obj2;

for(let key in obj2){
    
    console.log(key );
    
    
}

for (let copy in one2){
    console.log(copy,one2[copy]);
}

// --------------------------------------------------------------------
// Writable , Enumerable , Configurable
let obj3 = {};
console.log(obj3);

// adding key-value
obj3.name="Ram";
console.log(obj3);
console.log(Object.getOwnPropertyDescriptor(obj3,"name"));

// Writable = true , value ko change kr sakte h 
// ex:- obj3.name can be modified 
// Writable = false , value ko change nahi kr sakte h 
// ex:- obj3.name can't be modified 


// Configurable = true | writable , enumerable , configurable everything can be modified , sab change ho sakta h and can be delete the operator as well 
// Configurable = false | writable , enumerable , configurable can't be  modified , kuch change nhi ho sakta h , only writable can be changed from true --> false

let obj4 = {};
Object.defineProperty(obj4,'name',{
    value:"Shrey",
    writable:true,
    enumerable:true,
    configurable:true,
    // ab writable , configurable , enumerable kuch modify nahi ho sakta jaisa h waisa hi rhega true toh true false toh false
})





console.log(obj4);


// writable change  ho sakta h  once true -> false kyunki upar meine configurable ko false rakha h toh kuch redefine ya modify kuch nahi ho sakta h par true-> false ho sakta h once eventhough confighurable->false kyun na ho , jaisa yha par obj4.name mohit mein change nahi hua kyunki writable change ho gya false mein ;
Object.defineProperty(obj4,'name',{
    writable:false,
    
})

obj4.name='mohit';//change nahi hoga writable false h
console.log(obj4);

// Ex:- 2 

let obj5 = {
    name:"Shreyas",
    age:19,
    bank:"SBI",
    account_no:90384340,
}

Object.defineProperty(obj5,'account_no',{
    value:90384340,
    // writable:false,
    writable:true,
    enumerable:true,
    configurable:false,
})

console.log(obj5);


Object.defineProperty(obj5,'account_no',{
    
     // will throw error agar false -> true kroge writable ko , when configurable is set to false .
    // writable:true,
    writable:false
    // writable true -> false kroge toh key ki value change nahi ho sakti (account_no) kyunki configurable is set to false ; toh koi Object.defineProperty ke attribute (writable , enumerable , configurable) change nahi hoga as it is rhega
  
})

obj.account_no=3948304;
console.log(obj5);



const obj6 = {
    name:"Shyam",
    age:19,
    account_no:239849043,
    balance:2000,
}

Object.defineProperty(obj6,'name',{

    // jis bhi key ('name') ka enumerable false hoga woh accessible or print nahi hoga , agar true hoga toh woh accessible or print hoga.
    // Inherit hoke koi bhi property ya key aati h , uska enumerable true hua toh woh bhi print hoga 
    enumerable:false,
})


for(let key in obj6){
    console.log(key);
    
}


let obj7 = Object.create(obj6);
obj7.city="Haridwar";
obj7.pincode=109283;

Object.defineProperty(obj7,'pincode',{
    enumerable:false,
})

for(let key in obj7){
    console.log(key);
    // name , pincode print nahi hoga kyunki uska enumerable false kiya h .

    
}

Object.defineProperty(Object.prototype, "toString", {
  enumerable: true
});

let objm = { name: "Shyam", age: 20 };

for(let speed in objm){
    console.log(speed);
}
//  name , age , toString   👈 ab aa gaya


// for in loop : isko array ke sath nahi lete
// for in loop ka main purpose keys par iterate hokar keys ko print krna h aur arrays mein index ko keys samjhta h for-in loop toh index print ho jaata h naa ki unka value inside index.

const arr = [10,20,30,40,50];
// arr is an object

for(let key in arr){ 
    console.log(key , arr[key]);
    
}

arr.name="Ram";

for(let key in arr){
    console.log(key , arr[key]);
    // yha par name ko bhi index ki tarah print kr de rha h aur value(Ram) ko index-value ki tarah isiliye use nahi krte array ko for-in loop mein.
    
}


// Theory 
// when we use objects why it doesn't show/print object properties present in object.prototypes ?
// the reason behind it is that the properties (ex:-toString()) of object/array  which they inherit from their prototypes; their enumerable is false that's the reason they aren't printed and they are aren't accessible.

// getOwnPropertyDescriptor is used for showing writable , enumerable , configurable.
// define property is used to edit object value and writable , enumerable , configurable .

// jab hum kisi bhi object ke data ka writable:- false kr dete h , isiliye taaki data jo h unchangebale rhe , uska reason hacking nahi h kyunki agar hacking hoga toh pura data jo h hacker access kr sakta h toh woh khud jaakar change krdega , iska reason h accidentally overwrite ya accidentally code change naa ho khud ke galti se .

// Here’s a crisp 3–4 line difference:
//`for...in`** loops over the **keys (property names)** of an object (or indexes of an array, though not recommended).
//`for...of`** loops over the **values** of an iterable (like arrays, strings, maps, sets).
//`for...in` is best for **objects**, while `for...of` is best for **arrays and iterables**.
//Think: **in → index/key**, **of → value**. ✅
