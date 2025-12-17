// assume an order has been done through zomato for some food kept in the cart

// const cart = ["pizza", "coke", "sandwhich"];

// function placeOrder(cart, callback) {
//     console.log("Talking with Domino's");

//     setTimeout(() => {
//         console.log("Order placed Successfully");
//         // yeh Order ka data bhejna padega sabko kyunki bina iss data ke ba delivery address pata chlega delivered ko naa kya food chahiye woh bhi nahi pata chlega preparingOrder ko na kaunse restaurant se food lena hain pata chlega pickupOrder ko.
//         const order = {
//             orderid: 122,
//             food: cart,
//             restaurant: "dominos",
//             delivery: "Virar",
//         };

//         // yha callback(order) krenge toh jo second parameter mein arrow function diya h placeOrder ke usko run krega aur usmein (order) pass krdega as an parameter
//         // yha se order callback mein daala toh woh callbackfunction ke parameter mein chla gya 
//         callback(order);
//     }, 2000);
// }


// function preparingOrder(order, callback) {
//     console.log("Pizza Preparation Started");

//     setTimeout(() => {
//         console.log("Pizza Preparation Done");
//         // yha bhi same ho rha h foodDetails chahiye pickupOrder ko yeh yha se bheja jaayega callback function ke argument mein aur waha callback function jo ki second argument h preparingOrder ka uske parameter mein chla jaayega aur uske through pickupOrder bhi access krega aur apne argument mein daal lega aur pickupOrder ka function call hote hi apne parameter mein access lelega
//         const foodDetails = {token: 12 , restaurant : order.restaurant , location: order.delivery}
//         callback(foodDetails);
//     }, 4000);
// };



// function pickupOrder(foodDetails, callback) {
//     console.log("Reaching restaurant for picking order");

//     setTimeout(() => {
//         console.log("Order picked up by delivery boy");
//         // same yha bhi yhi hoga droplocation ko callback(droplocation) ke andar daal diya function call ke argument mein ab jab pickupOrder ka 2nd argument jo ki callback h woh run hoga toh uske andar droplocation uske parameter mein access kr sakte h aur uss function ke andar delivered function hain woh bhi access kr sakta h droplocation ko
//         const droplocation = foodDetails.location;
//         callback(droplocation);
//     }, 3000);
// }



// function delivered(droplocation) {
//     console.log("Delivery boy on the way");

//     setTimeout(() => {
//         console.log("Order deliverd successfully");
//     }, 5000);
// }


// yeh bohot messy code hain readability bhi kharab hain upar se disadvantage hain dependency ki ek dusre par.


// yha order isiliye access ho sakta h bawjood iske ki woh function ke andar bna h jab hum callback(order) krte h tab placeOrder ka second argument ()=>{} run hota h toh callback(order) krne par order argument ki tarag pass hota h aur usse woh jo placeOrder ka argument h woh (order)=>{} order ko parameter ki tarah receive krta h aur phir 
// yha order callbackfunction ke parameter mein daala toh woh preparingOrder bhi access krsakta h kyunki woh callback function ke andar hain aur ab jab preparingOrder ke argument mein daala h toh preparingOrder ka function parameter ke through access kr sakta h.
// placeOrder(cart, (order) => {

//     preparingOrder(order , (foodDetails) => {

//         pickupOrder( foodDetails , (droplocation) => {

//             delivered(droplocation);

//         });

//     });

// });



// yeh hain callback jiske andar preparing order hain , aise hi har callback ke andar ek function hain.
// const callback = ()=>{
//     preparingOrder();
// }

// agar kuch aisa krde ki cart ke andar ka data bhejde ki yeh food prepare krna h aur uske baad callback krde preparingOrder() ko.
// placeOrder(cart,callback);









// yeh samajh lete h yeh kaam kaise  kiya h 
// 1. placeorder ne functioncall kiya uske andar 2argument the a. cart,  b. arrow function
// 2. placeorder function jab run hua toh uske pass 2 parameter aaye a.cart , b. callback , callback wahi h jiske andar arrow function h
// 3.jab sab run ho gya toh placeorder ke andar se hi callback ko call kiya wapas aur uske andar order naam ka object as an argument pass kiya
// 4. ab jaise hi callback(order) krke functioncall hua placeOrder function ke andar wapas placeOrder(cart,(prder)=>{}) functioncall ka 2nd argument hi run hua jo ki arrow function hain aur uske parameter mein order daal diya gya aur uss arrow function ke andar hi agla function preparingOrder h jo run hua aur usko order ka details chahiye apnaa kaam karne k liye aur ab woh access bhi kr sakta h kyun ki jiss function ke andar woh h us function ke parameter mein woh order hain aur phir preparingOrder(order,()=>{ }) ke andar woh argument ke roop mein pass hua aur phir preparingOrder call hua aur preparingOrder function ke parameter mein access mila.

// --------------------------------------------------------
// How to Handle Messy Callback Hell using Promises

const cart = ["pizza", "coke", "sandwhich"];

function placeOrder(cart) {
    console.log("Talking with Domino's");

    const pr = new Promise ((resolve,reject)=>{

        setTimeout(() => {
        console.log("Order placed Successfully");
        const order = {
            orderid: 122,
            food: cart,
            restaurant: "dominos",
            delivery: "Virar",
        };

        resolve(order);

        
    }, 2000);

    })

    return pr;
 
}


function preparingOrder(order) {
    console.log("Pizza Preparation Started");

    const pr2 = new Promise((resolve,reject)=>{
           setTimeout(() => {
        console.log("Pizza Preparation Done");
        const foodDetails = {token: 12 , restaurant : order.restaurant , location: order.delivery}
        resolve(foodDetails);
    }, 4000);
    });

    return pr2;
 
};



function pickupOrder(foodDetails) {
    console.log("Reaching restaurant for picking order");
    const pr3 = new Promise ((resolve,reject)=>{

          setTimeout(() => {
        console.log("Order picked up by delivery boy");
        const droplocation = foodDetails.location;
        resolve(droplocation);
    }, 3000);

    })

    return pr3;
  
}



function delivered(droplocation) {
    console.log("Delivery boy on the way");

    setTimeout(() => {
        console.log("Order deliverd successfully");
    }, 5000);
}



// placeOrder khud ek promise return krta h pr naam ka
placeOrder(cart) //same as fetch(api)
.then((order)=> preparingOrder(order))//.then() usi returned Promise par lag jaata hai
.then((foodDetails)=> pickupOrder(foodDetails))
.then((droplocation)=> delivered(droplocation))
.catch((error)=>console.log(error));


// callback hell 

// placeOrder decide karta hai:
// callback kab call hoga
// kitni baar call hoga
// call hoga bhi ya nahi

// (control inside function)

// PlaceOrder
//   └── calls preparingOrder
//         └── calls pickupOrder
//               └── calls delivered


// Promise 

// preparingOrder ko order chahiye ✔️
// Lekin placeOrder ko ye nahi pata:
// kaun next chalega
// kab chalega
// chalega bhi ya nahi

// (control outside function)
// placeOrder → then → preparingOrder → then → pickupOrder → then → delivered
