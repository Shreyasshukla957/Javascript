
const arr = [34, 35, 36];

const obj = {
    // every key  in object is stored in string form ex:-"name","gender","age"
    name: "Shreyas",
    phn_no: 93837383,
    "pan no": 93837383, // isko sirf is format mein (obj["pan no"]); access kr sakte h.
    gender: "Male",
    age: "19",
    0: 34,
    1: 35,
    2: 36,
    undefined: 30,
    null: "mohan",
}



console.log(obj.name);  //OR 
console.log(obj["name"]);
console.log(obj["pan no"]);
console.log(obj["0"]); //OR only for key written in number
console.log(obj);

// array bhi number wale [key] ko aisa hi store krta h isiliye array object type dikhata h  
console.log(obj[0]);  //console.log(arr[0]);
console.log(obj[1]);  //console.log(arr[1]);
console.log(obj[1]);  //console.log(arr[2]);
console.log(obj.name, arr.length);


const arr1 = [38, 45, 75, 74, "shreyas", true];
// yeh array object form mein aisa hi dikhega , isiliye dono same tareeke se store hote h aur isiliye array 'object' type dikhata h 
// array ne object ko copy kiya h isliye same tareeke se access hota h
const obj1 = {
    0: 38,
    1: 45,
    2: 75,
    name: "shreyas",
    value: "true",
}


// another way of initializing object
const person = new Object();
console.log(person);


// adding property
person.name = "Rohit";
person.age = 20;
person.gender = "Male";
person.id = 232244;
console.log(person);

// delete
delete person.age;
delete person.id;
console.log(person);

// modify and update 
person.name = "Shreyas";
person.age = 21;
console.log(person);

// Third Method

// class People{
//     constructor(na,ag,gen){ 
//         //storing na = 'rohit' , ag = 20 , gen = 'Male'

//         this.name = na; 
//         this.age=ag;
//         this.gender=gen;

//         //this uske liye h jo usko call kr rha h example agar per1 usko call krta toh per1.name , per1.age , per1.gender hota par usko toh per1 aur per2 dono call kr rhe h toh dono nahi likh sakte isiliye this keyword use kiya gya h taaki jo call kre uske andar woh value store ho jaaye

//     }

// }

// let per1 = new People("Rohit",20,"Male");
// console.log(per1);

// let per2 = new People("Shreyas",19,"Male");
// console.log(per2);



let object1 = {
    name: "Ram",
    class: 5,
    rollno: 27,
    gender: "Male",
}

// accessing only keys
const array = Object.keys(object1);
console.log(array);

// accessing only values
const array1 = Object.values(object1);
console.log(array1);

// accessing keys:values both
const arrays2 = Object.entries(object1);
console.log(arrays2);
console.log(arrays2[0]);

// Assign use case
const obj11 = { a: 1, b: 2 };
const obj22 = { c: 3, d: 4 };
const dubba1 = {name:"Shiv", id:323242};  
const dubba2 = {names:"Parvati", ids:1233323};  
// const returnedtarget =Object.assign(target,source,source2..);
const obj33 = Object.assign( {},obj11, obj22);
const dubba3 = Object.assign({}, dubba1, dubba2);  
// const obj33 = Object.assign(obj11,obj22);
//  yeh wrong h ismein pehle obj11 h target ban gya h, pehla variable target h jis mein assignment/addition hota h.
// {} hamesha khaali bracket pehle variable rakhna kyunki addition/assignment ussi ke andar hota h jo pehle variable rhega usmein add ho jaayega agar obj11 rahega pehle toh obj33 mein toh obj11+obj22 hoga hi saath mein obj11 ki value bhi obj33 ke equal ho jaayegi (obj11+obj22) kyunki woh target ho jaayega agar pehla variable obj11 hua rather than empty bracket{}.
console.log(obj33, obj11);
console.log(dubba3);

obj33.a = 10;   // obj33 me change hua → {a:10, b:2, c:3, d:4}

// Object.assign({}, obj11, obj22) likhne ke baad:
// obj33 ek naya object ban gaya.
// Usme obj11 aur obj22 ke primitive values copy ho gaye.
// Obj33 alag object hai, isliye Obj33.a me change karne se dusre
//  Obj11.a pe effect nahi hoga.
// Sirf agar koi nested object ya array hota, tab reference share hota aur dono pe effect dikhta par yha primitve values ke wajah se deep copy ho rhi h yhi agr nested array , objects, function hota toh shallow copy hoti aur obj11 ya obj22 ke changes se obj33 mein bhi changes aate.
// Primitive values (jaise number, string, boolean) copy hote hain → dono objects completely alag ho jaate hain.
// Is wajah se obj33.a aur obj11.a independent hain.
console.log(obj33, obj11);




// spread operator does the same work as assign works , while using different method by spreading/expanding out the source and integrates the sources
const obj44 = { ...obj11, ...obj22 };
console.log(obj44);
const dubba4 = {...dubba1,...dubba2};
console.log(dubba4);//same kaam krta assign jaisa jodne ka , Collect the Spread.

let obj55 = {
    a: 1,
    b: 2,
}

// Shallow Copy mein references are copied(original address is shared)
// yha par dono object (obj55,obj66) ek address ko point kr rhe h toh ek mein manipulation dono mein hoga par assign function se jab copy krte h usmein sirf nested wala jo h woh change hoga normal value ya string wala nahi. 
let obj66 = obj55;
obj66.a = 10;
console.log(obj66, obj55);

// deep copy New, independent copies are created . Changes to the copy do not affect the original
let obj77 = structuredClone(obj55);
const dubba5 = structuredClone(dubba4);//structured clonse use krke deep copy krte h dubba4 ---> dubba5 ka value same hoga par dono ka address alag
dubba4.name = "Mahadev";
obj77.a = 9;
console.log(dubba5,dubba4);//dono ka name alag hain because of shallow copy
console.log(obj77, obj55);

// Nested Object
const user = {
    name: "Ram",
    balance: 3849340,
    address: {
        pincode: 390380,
        city: "Mumbai",
    }
}

const people = {
    name:"Hemant",
    id:23324,
    age:23,
    address:{
        city:"Mumbai",
        town:"Virar",
        area:"Global City",
    }
    

}

console.log(people);
console.log(people.id);
console.log(people.age);
console.log(people.name);

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.pincode);

// spread operator bhi aise hi work krega , obj11 and obj22 ke elements ko khol dega aur phir saare elements obj33 ke andar store ho jaayenge
// Structure clone best h pura deep copy krega koi tension nahi aadha deeo aadhe shallow ka.
const user1 = Object.assign({}, user);
user1.name = "Bharat";
console.log(user, user1);

const people1 = Object.assign({},people);
people1.address.area = "NarangiPhatak";
console.log(people1,people); //dono mein narangi phatak ho gya kyunki deep copy hua h , assign function mein jab nested object ya array ya function copy hota h toh deep copy hoti h.
 
user.address.city = "Lucknow";
console.log(user, user1);

// Object.freeze () , Object.seal ()

// 1. Object.freeze(obj)
// ❌ Add nahi kar sakte new properties.
// ❌ Delete nahi kar sakte properties.
// ❌ Update nahi kar sakte existing properties.
// Matlab pura object bilkul “jam” ho jata hai (read-only).

const objs = { a: 1, b: 2 };

Object.freeze(objs);

objs.a = 100;     // ❌ change nahi hoga
objs.c = 3;       // ❌ add nahi hoga
delete objs.b;    // ❌ delete nahi hoga

console.log(objs); // { a: 1, b: 2 }



// 2. Object.seal(obj)
// ❌ Add nahi kar sakte new properties.
// ❌ Delete nahi kar sakte properties.
// ✅ Update kar sakte ho existing properties.

const objf = { a: 1, b: 2 };

Object.seal(objf);

objf.a = 100;    // ✅ update ho jayega
objf.c = 3;      // ❌ add nahi hoga
delete objf.b;   // ❌ delete nahi hoga

console.log(objf); // { a: 100, b: 2 }



// Destructuring of an object yha 'rest' operator use hota h elements ko collect krne k liye.
let object2 = {
    names: "Shreyas",
    money: 28297129278,
    balance: 3820382938203,
    age: 19,
    aadharcard: 33803430,


}


const desturcture = {
    maal:"saman",
    gadha:"donkey",
    paagal:"mad",
    numberr:4224554524,
    idis:2345666666,
}

// const{name , balance , age } = object2; // object2 isliye likha h kyunki yha se value extract krna h , mention krna padta h
// console.log(name , balance , age);

// // can rechange the key name
// const{name:full_name,balance: amount,age:umar} =object2;
// console.log(full_name,amount,umar);
// const {maal:things,paagal:unfit,idis:idli}=desturcture;

// can desturcture some of the keys and value (name , age) and rest can be stored in another object (...obj14)
const { names, age, ...obj14 } = object2;
console.log(names, age);
console.log(obj14);

const {maal , paagal , numberr , ...desturcturedone} = desturcture;
// ...destructuredone mein rest operator use hua hain taaki bache hue destructure objects ke elements ko collect krke desturcturedone mein daal diya jaaye.
console.log(desturcturedone);
console.log(desturcture); //destructuring krne par original object mein koi changes nahi  hota h uske saare elements waise ke waise hi rehte h


// destructuring in array

const arrr = [2, 34, 4, 5, 2, 7, 8, 6];
const arrrrr = [23,3,4,424,425,255,2524,32324];
// const [first , second, , fourth]= arrr;
// console.log(first , second ,  fourth);
// another way of array destrucutring just like
const [oneee , twooo , three,...arrrrr3] = arrrrr;
// variable mein value store hota h oneee mein 23 , twooo mein 3 , three mein 4 aur phir ...arrrrr3 mein baaki saare element par iss destructuring of array se main array arrrrr mein koi modification nahi hoga jaisa tha waise hi rhega
const [first, second, ...third] = arrr;
console.log(first, second, third);
console.log(oneee , twooo , three,...arrrrr3);


let object3 = {
    nameis: "Shreyas",
    money: 28297129278,
    balance: 3820382938203,
    age: 19,
    aadharcard: 33803430,
    arrays: [20, 30, 40, 50],
    address: {
        pincode: 343535,
        city: "Mumbai",
        state: "Maharashtra",
        arrayss1: [23, 43, 53, 63, 73, 83],
    },


}


let object69 = {

    what:"kya",
    who:"kaun",
    kab:"when",
    how:"kaise",
    bhaagja:"runaway",
    dress:{
        arre:[23,34,45,56,67,78,98],
        shirt:"white",
        blazer:"gray",
        pant:"gray",
        shoes:"black",
       

    }
}

// simplest way to access
console.log(object3.address.pincode);
console.log(object69.dress.arre[0]);
console.log(object69.dress.shirt);
// destructuring nested path
let { address: { pincode, city, state , ...obj230 } } = object3;
console.log(pincode, city, state);
console.log(obj230);
let {dress: {arre:[firsts],...obj320}} = object69;
console.log(firsts);


const {dress: {shirt,pant,shoes,...object70}} = object69;
console.log(object70);

// behind the scenes aise work krta h destructuring in arrays 
const { arrays: arrays1 } = object3;
const [firsst] = arrays1;
console.log(firsst);

const { arrays: [one, two] } = object3; // object3 isliye likha h kyunki yha se value extract krna h , mention krna padta h
console.log(one, two);


// accessing nested arrays through destructuring nested path
const { address: { arrayss1: [onee, twoo] } } = object3;
console.log(onee, twoo);

const user11 = {
    nam:"Shrey",
    Amount:355666667,

    greet: function(){
        return "Hello Buddy";
    },

    meet:function(){
        console.log("Nice to meet u");
        
    },
    
    speed:function(word){
        console.log(word);
    }

}


console.log(user11.speed("speed"));
console.log(user11.greet());
console.log(user11.meet()); // will show undefined because return kuch nahi kr rha h .
//  Haan, bilkul sahi samjha aapne!
//  undefined tabhi milta hai jab uss particular element, variable, array index, ya object property ke paas koi value stored nahi hoti ya assigned nahi hoti .
user11.meet();//yha print krwa rha h koi value stored nahi function call se print bs krwa raha h

let user22 = {
    amount:99000000,
    age:20,
}

let user33 = {
    money:3039803,
    name:"Raju",

}

console.log(user33.amount); //cannot access property out of scope(another object property access nahi kr sakta)

// proto use krke dusre object ke property ko access kiya h,by inheriting propertes of object user22 in object user33.
// user33.__proto__=user22; //not healthy habit instead use create one.
user33 = Object.create(user22);
console.log(user33.amount);
console.log();


// Theory Prototype Chain/Inheritance
// Created Array jo h uske andar saari property (ex:- push , pop etc ) aati h array.prototype se jab bhi hum array create krte h uske andar array.protoype added hota h isiliye hum saare property inherit krke use kr paate h created array mein kuch property jo h woh array.prototpe ko bhi inherit krna padta h object.prototype se jo created array mein use hota h (ex:- toString)


// Every array is an object, so it inherits from Array.prototype, which itself inherits from Object.prototype.
// This means arrays have access to both array-specific methods (like push, pop, map, etc.) from Array.prototype and generic object methods (like hasOwnProperty, toString, etc.) from Object.prototype
// There is no prototype after Object.prototype after that it results in null.

// Practical Implementation of Theory Prototype Chain/Inheritance
let arra = [10,20,30,40,50];
function namess(){
    console.log(1);
}
console.log(arra.__proto__==Array.prototype);
console.log(arra.__proto__.__proto__==Object.prototype);
console.log(arra.__proto__.__proto__.__proto__==null);
console.log((namess.__proto__.__proto__ === Object.prototype));


// "Short Analogy"
// null = "Maine khud se khaali kiya"
// undefined = "Abhi tak kuch diya hi nahi"

// Hashing technique for memory allocation
// Hashing ek technique hai jisme data ko ek chhote index (hash code) mein convert karte hain using a hash function.
// Phir us index pe data ko hash table mein store kar dete hain.

// Hash Table (size = 10) 
// Index:   0   1   2   3   4   5   6   7   8   9
// Data:   --  --  --  --  --  --  --  --  --  --

// Hash Function Example
// Maan lo keys = {23, 43, 13, 27}
// Hash Function: h(key) = key % 10

// 23 % 10 = 3  → Index 3
// 43 % 10 = 3  → Index 3 (collision!)
// 13 % 10 = 3  → Index 3 (collision again!)
// 27 % 10 = 7  → Index 7

// Hash Table after insertion
// Index:   0   1   2   3              4   5   6   7     8   9
// Data:   --  --  --  23,43,13  --  --  --  27  --  --
// 👉 Matlab index 3 pe multiple values aayi = Collision.

// 🔹 Collision ko handle karne ke tareeke
// ab hum third index par 3 value hone ke wajah se sab saath mei nahi rakh sakte toh hum chaining shuru krdenge 
// ismein jaise 3 value h 3rd Index par 23,43,13
// 23---43---13 chaining krdiye ab inn teeno ko alg alg location par store krdenge phir 
// 3rd index mein 23 ka address store krdenge , 23 jaha store h waha par 43 ka address store krdenge , 43 jaha par hain waha par 13 ka address store krdenge , toh collision bhi nahi hoga aur access bhi fast rhega data ka heap memory se.

// Object mein bhi aise hi implementation hoti hain
const objecttt = {
    name:"Ram",
}

console.log(objecttt.name);

// toh name bhi mathematical function laga kar number mein convert krdenge aur phir hashing ke through kisi hash function wali jagah par rakhdenge aur phir hasing wala kaam chalu access krne ka jisse fatafat ho jaayega.