// for-of loop is used for arrays / String value accessing.

const arr = [10,30,40,520,304];

for(let value of arr)
{
    console.log(value);
}

for(let value of arr){
    console.log(value);
}
// for-of loop can be used for accessing string.

let str = "Shrey is my name";
for(let values of str)
{
    console.log(values);
}
console.log(str.length);



// for-of loop isn't used in object , because it cannot itterate over object

// Error will be stated  
// let obj = {
//     name:"Shreyas",
//     age:19,
//     id:12332,
//     gender:"Male",
// }

// for(let key of obj){
//     console.log(key);
// }

// let obj ={
    
//     1:20,
//     0:10,
//     name:"Shreyas",
//     surname:"Shukla",
//     id:2324434,
//     gender:"Male",
// }

// //The ouptut results key '0' first and key '1' second ; though '1' is written above '0' it means object doesn't access it's keys/items one by one similar to arrays it works differently compared to array ; one of the reason is array/string length can be found out due to array.length,string.length but we cannot find one in object so it doesn't know where to move next/ itterate next.
// console.log(obj);

// how we can access object throgh for-of loop 

let obj ={
    
    1:20,
    0:10,
    name:"Shreyas",
    surname:"Shukla",
    id:2324434,
    gender:"Male",
}

// iss form mein isiliye chla sakte h kyunki Object.keys(obj) yeh arrays form mein hota h toh yha itterate ho jaayega
for(let key of Object.keys(obj)){
    console.log(key);
}

for(let value of Object.values(obj)){
    console.log(value);
}

for(let key of Object.entries(obj)){
    console.log(key);
}

// How to find length of Object
// const obj = {
//   name: "Rohit",
//   age: 30,
//   city: "Mumbai"
// };

// const length = Object.keys(obj).length;
// console.log(length); // Output: 3


// CallBackFunction mein ek function ke argument mein dusre function ko daala jaata h jaise yha par function 'names' ke argument mein function greet ko daala h. 

function names(fun){
    console.log("Hello I am Boy");
    fun();
}

// function greet(){
//     console.log("Hello I am Call Back Function");
// }

// names(greet);


 



// OR ....
// names ke function call ke andar hi pura greet function daal diya h 
// names(function(){
//     console.log("Hello I am Call Back Function");
// })

// OR ....

// const greet = function (){
//     console.log("Hello I am Call Back Function");
// }
// names(greet);

// OR ....

// names(()=>{
//         console.log("Hello I am Call Back Function");
//     })


// Real Scenario of Call Back Function..
// function fetchdata(){
//     // multiple codes honge
//     console.log("I'm fetching data");
// }

// setInterval ek inbuilt function call h , uske argument mein hum ek function aur time daale h jisse woh uss funciton ko jo argument mein daala h , call krta h aur time isiliye kyunki uss time mein woh regular interval mein function se data lekar result mein deta h , jaise yha fetchdata ko function call kiya h woh har 5sec mein print hota rhega aur result mein dikhega.
// setInterval(fetchdata,5000);



//// forEach  callback function ko expect krta h argument mein ; forEach array ke har index ke value ko leta h aur function ke parameter mein daalta h ek ek kar ke aur print krta h 
// forEach return nahi krsakta map aur filter ke tarah

const arr2 = [10,20,30,40,50];
// // yha par forEach function ke argument mein call back function ko daalne ke jagah ; directly function ko forEach ke argument mein insert krdiya gya.
// // // in first paramter it gives value of each index , second parameter it gives index and third is optional
arr2.forEach((val , index , arr )=>console.log(val , index , arr[index] = val*2));


// OR 


function greetNum (num){
    console.log(num);
    return num; //wrong forEach return kuch bhi nahi deta h .
}

arr.forEach(greetNum);  

// internal work aise krta h , pseudo code forEach internally yrh pura code chalata h phir greetNum[i] ko pass krdeta h jisse greetNum ke parameter mein arr[i] ki value jaati rehti h.
// for (let i = 0; i < arr.length; i++) {
//     greetNum(arr[i]);  // forEach yeh internally karta hai
// }


// Explanation
// yahan call-back function kaise kaam krta h forEach ke liye

// const arr = [10, 20, 30];
// function printVal(val) {
//   console.log(val);
// }

// arr.forEach(printVal);

// Pehle .forEach() karta hai printVal(10) — val = 10
// Phir printVal(20) — val = 20
// Phir printVal(30) — val = 30



// Filter isiliye use hota toh taaki aap apne hisab se koi bhi data ko filter out krlo , lekin yeh sirf true ya false mein expect krta h , chahiye ya nahi chahiye.
// Filter bhi CallBack Function use krta h .

let array1 = [20,304,502,340,5,532,5055,34,5];
const ans1 = array1.filter((num)=>{

    // filter true ya false expect krta h , chahiye ya nahi chahiye.
    // yha par agar even no hoga toh filter output mein dega.
    // comparison operator is used for true or false.
    return num%2==0; // if it is true the filter inlcudes the original element 'num'.
    
});

// filter returns elements storung inside an array.
console.log(ans1);



const students = [
    {Name:"Rohan" , AGE:22 , Marks: 35},
    {Name:"Soham" , AGE:25 , Marks: 64},
    {Name:"Roshan" , AGE:26 , Marks: 54},
    {Name:"Dhanu" , AGE:23 , Marks: 87},
    {Name:"Hathi" , AGE:27 , Marks: 47},
    {Name:"Tia" , AGE:24 , Marks: 87},

];


const Result = students.filter((value) => value.Marks > 50);

// OR (destructuring marks from each object present in  students array)

// const Result = students.filter(({Marks}) => Marks > 50);



console.log(Result);

// map does the filter work but also has superiority because it can modify the input aswell , which filter can't.

const array3 = [1,2,3,4,5];
const ans = array3.map((num , index)=>num*index);

console.log(ans);

// using filter and map 
// filter ka result jo h even number woh map mein chla jaayenge aur map ka operation num*num perform krenge phir result1 mein store ho jaayenge.
const result1 = array3.filter((num)=>num%2==0).map((num)=>num*num);

console.log(result1);
