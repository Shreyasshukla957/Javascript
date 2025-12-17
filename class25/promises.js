// fetch operation is an async task 
// async task woh hote hain jo kuch time lete h , turant nahi hote h kyunki kahi se woh data fetch krke le aata h.
// API is Application programming Interface , ek messenger h jo allow krta h different software applications ko communicate aur data exchange krene mein


const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=d337c5cf75f146cb982162724251507&q=London&aqi=yes`);


// console.log(promises);
// iska output:- Promise { <pending> } kyun dikha rha h?
// kyunki yeh ek async task h , matlab yeh kuch time lega data fetch krke le aane mein , par hum wait nahi kr rhe h direct 'console' krke print kra de rhe h isiliye yeh pending dikha rha h.
// console.log(7+2); //yeh dekho ekdum se print ho gya lekin async wala nahi hua yhi faraq hain.

// setTimeout(() => {
//     console.log(obj);
// }, 2000); // ab isne output dediya kyunki async task hain toh isko data fetch krne mein kuch time lgega aur humne isko woh time dediya through settimeout , par yha bhi ek problem h jaruri nahi h 'promises' 2sec mein data fetch krke le aaye ho sakta h isse 2sec se jyada lag jaaye yaa kam lag jaaye humein yeh nahi pata h toh yeh ideal way nahi h.
// Iska ideal way h (.then) , sab se pehle response ke andar fetched api/data aajaayega ; response ek callback hain jiske andar-> fetch(`http://api.weatherapi.com/v1/current.json?key=d337c5cf75f146cb982162724251507&q=London&aqi=yes`)
// yhi 'promises' hi (promise object) hain jo response ke andar ka value rakhega.
// Promise ke andar 3 stage hoti h 
//  first 'pending' uske baad yaa toh 'resolve' hoga yaa 'reject'
// ab (.then )iss format ka yeh fayda hain yeh tabhi chlega jab iske andar data aajayega fetch hokar server se aur aise yeh reslove ho jaayega
//ab (.catch) ka yeh kaam hain maanlo server se data fetch krne ke time par data nahi aapaya kisi problem ke wajah se toh yeh (.catch) bta dega ki data aa nahi paa rha h , kuch problem hain aur aise yeh reject krdega.
// promises.then((response)=>{ 
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// });

// Two Ways 

// Traditional Way
// promises.then((response) => {
//   console.log(response.json());
// });

// Hardcode Way
// let handleResponse = (response) => {
//   console.log(response.json());
// };

// promises.then(handleResponse);

         //    ┌──────────────────────────────────────┐
         //    │        Promise Resolve Hotā Hai       │
         //    └──────────────────────────────────────┘
         //                     │
         //                     │ (resolved value)
         //                     ▼
          //     ┌──────────────────────────────┐
          //     │     .then(handleResponse)     │
          //     └──────────────────────────────┘
                             // │
                             // │  JS automatically calls callback:
                             // ▼
         // ┌──────────────────────────────────────────────┐
         // │       handleResponse(responseObject)         │
         // └──────────────────────────────────────────────┘
                             // │
                             // │ inside function:
                             // ▼
 // ┌─────────────────────────────────────────────────────────────┐
 // │ console.log( responseObject.json() )                        │
 // └─────────────────────────────────────────────────────────────┘




// ab jab ham response ko print kr rhe h toh woh ek header de rha h par humein toh uska body chahiye jiske andar ka data access krna h.
// toḥ hum yeh krenge ki (response.json()) krdenge jisse humein body mil jaayega aisa laga tha par nahi mila ab pata chala ki kyun nahi mila direct print krane par kyunki response.json() bhi ek 'promise' h toh iska matlab directly agar isko hum 'console' krenge toh yeh 'pending' dikhayega uske liye humein response.json() par bhi 
// (.then) use krna padega 'resolve' aur (.catch) lagana padega 'reject' ya error/problem k liye.


// promises.then((response)=>{
//     console.log(response.json());
// })


// 1st way
// promises.then((response)=>{
//     const promises2 = response.json(); //meine galti kardi response.json ke andar data daal diya , response.json callback nahi leta h.
//     promises2.then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     })
// })
 

// 2nd Way
// const promises2 = promises.then((response)=>{
//     return response.json();
// })

// promises2.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



// 3rd Way and best way 
// promises.then ke andar response.json ke value return hokar chali gayi aur uske baad ab uske andar jab response.json() ki value hain toh ab uspar directly (.then) aur (.catch) laga diya h , easy and most readable code ban chuka h , ek aur baat aapne (.catch) dekha jaaye toh response.json par lagaya hain aisa lagta h par aisa nahi (.catch) promises ke liye bhi kaam krega , toh aapko ek baar hi (.catch) lagana h aur woh sabke liye error aaya hoga toh display kradega.
// promises.then((response)=>response.json())
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error));

// ab display krake dekhte hain jo krana h , body ka access toh mil gya h ab.
// pehle temperature krake dekhe hain Celsius mein
// phir temperature krake dekhte h fahrenheit mein

promises //promises mein bhi jo data aata h server se object form mein aata h
.then((response)=>response.json())
.then((data)=>{
    console.log(data.current.temp_c);
    console.log(data.current.temp_f);
})
.catch((error)=> console.log(error));
 
// we can directly do this as well 
// fetch("https://api.weatherapi.com/v1/current.json?key=...") this provides an 'object' with data from server which is then received by
fetch(`http://api.weatherapi.com/v1/current.json?key=d337c5cf75f146cb982162724251507&q=London&aqi=yes`)
//  .then and stored inside response
// 'response' here is a Response object, with headers, status, and methods to read the body
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((error)=> console.log(error));




