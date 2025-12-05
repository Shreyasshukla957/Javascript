// reduce
let array = [10,20,30,40,50];



// Reduce can only take input arrays but if want to take object input use
// Use Object.keys/values/entries + reduce because (Object.keys/values/entries) stores values in arrays form
// const result = array.reduce(()=>callback function , initialization)
// reduce ka kaam hota h result obtain krna , result store krna kisi bhi type mein jaise hum initialization mein daale h ex:- object form mein {} , array form mein [] , number form mein 0 etc. 
const result = array.reduce((acc,curr)=>{
    console.log(acc,curr);
    acc = acc + curr;
    return acc; // yha kuch bhi return kroge woh acc ke andar store hota h.
}, 0)

// OR
// 3rd paramter mein index , 4th mein array daal sakte h same as forEach
// const result = array.reduce((acc,curr)=> acc + curr, 0)

console.log(result);

let arr = ["Orange","Apple","Banana","Orange","Apple","Banana","Grapes","Pineapple"];

// final ans dena h ek object ke form mein, ex:- orange:3
// yha par acc -> accumulator jo h object ka role play kr rha h kyunki {} se initialize kiya hua h.
const ans = arr.reduce((acc,curr)=>{

    if (acc.hasOwnProperty(curr)) 
        acc[curr]++;
    else
        acc[curr]=1;

        return acc;  

},{}) 

console.log(ans);









