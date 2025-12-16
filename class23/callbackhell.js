// call back hell

// // Ex:1
// // HardCoded vs Callback function approach

// // HardCoded
// function boilWater() {
//     console.log("Paani ubal raha hai...");
//     setTimeout(() => {
//         console.log("Paani ubal gaya!");
//         addTeaLeaves(); // Hardcoded hai, hamesha yahi chalega
//     }, 2000);
// }

// function addTeaLeaves() {
//     console.log("Chai Patti daal di...");
//     setTimeout(() => {
//         console.log("Chai Patti ubal gayi!");
//         addSugar(); // Hardcoded hai
//     }, 1000);
// }

// function addSugar() {
//     console.log("Cheeni daal di...");
//     setTimeout(() => {
//         console.log("Chai tayaar hai! Enjoy :)");
//     }, 500);
// }

// boilWater();


// // Callback function approach
// function boilWater(callback) {
//     console.log("Paani ubal raha hai...");
//     setTimeout(() => {
//         console.log("Paani ubal gaya!");
//         callback(); // Jo bhi step chahiye, pass kar do!
//     }, 2000);
// }

// function addTeaLeaves(callback) {
//     console.log("Chai Patti daal di...");
//     setTimeout(() => {
//         console.log("Chai Patti ubal gayi!");
//         callback();
//     }, 1000);
// }

// function addSugar(callback) {
//     console.log("Cheeni daal di...");
//     setTimeout(() => {
//         console.log("Chai tayaar hai! Enjoy :)");
//         if (callback) callback();
//     }, 500);
// }

// // Ab aap flow decide kar sakte ho:
// boilWater(() => {
//     addTeaLeaves(() => {
//         addSugar();
//     });
// });

// // Agar bina cheeni wali chai chahiye: toh addSugar wala skip kr sakte h
// boilWater(() => {
//     addTeaLeaves(() => {
//         console.log("Bina cheeni wali chai tayaar hai!");
//     });
// });

// // Coffee banana ho toh: dono skip krke function call mein hi coffee banane ka step btadiya yahi flexibility , reusability hain.
// boilWater(() => {
//     console.log("Coffee powder daal diya, coffee tayaar hai!");
// });



// Ex:2
// ordering pizza from Domino's

// pehle order place krne ke liye usmein domino's se baat kiya phir 2sec baad order placed ho gya
 // yha callback reference store krta h preparingorder function ka naaki copy krta h 
function placeOrder(callback) {
    console.log("Talking with Domino's");

    setTimeout(() => {
        console.log("Order placed Successfully");
    //    let callback = reference of preparingOrder function
         callback();//yha callback call kiya h aur preparingOrder call hota h
        
    }, 2000);
}

// pizza preparation start ho gya aur 4sec mein pizza preparation ho gya
function preparingOrder(callback) {
    console.log("Pizza Preparation Started");

    setTimeout(() => {
        console.log("Pizza Preparation Done");
        // pickupOrder(); yeh nahi krna h yeh hardcode nahi krna h , humein callback function ka use krna hain
        callback();
    }, 4000);
};


// delivery boy pizza restaurant pohoch gya h 3sec mein pizza pickup krliya store se
function pickupOrder(callback) {
    console.log("Reaching restaurant for picking order");

    setTimeout(() => {
        console.log("Order picked up by delivery boy");
        // delivered(); yeh nahi krna h yeh hardcode nahi krna h , humein callback function ka use krna hain
        callback();
    }, 3000);
}


// delivery boy nikal gya hain on the way hain aur 4sec mein delivery customer ko krdiya successfully
function delivered() {
    console.log("Delivery boy on the way");

    setTimeout(() => {
        console.log("Order deliverd successfully");
    }, 5000);
}


// mein chahta hu ki pehle placeorder pura chale phir uske baad preparingOrder chale lekin yha ho yeh rha hain ki
// agar meine aise call kiya toh dono simultaneously call ho jaayenge aur mis-match ho jaayneg krke dekh sakte hain
// placeOrder();
// preparingOrder();

// iske liye call back function ka use krsakte hain hum jisse pehla function placeOrder chale pehle phir preparingOrder chale 
// iske liye hum placeOrder ke argument mein preparingOrder ka function daal denge isse hoga yeh pehle placeOrder chlega phir preparingOrder.
// placeOrder(preparingOrder);

// lekin agar mein chahta hu ki placeorder ko call kru uske baad preparing order call ho jaise (line no 53) mein hua h uske baad pickuporder call ho aur phir delivered call ho apne aap 
// matlab jaise hi placeorder call kru apne aap uske baad ke saare function call ho lekin (placaeOrder(preparingOrder) ) krke sirf placeorder call hoga phir preparing order aur hume hardcodede nahi krna h jaise preparing order ke andar jaakar pickuporder ko call kru aur phir pickuporder ke andar jaakar delivered ko call kru.
// isiliye hum callback hell use kr sakte h jisse ek ke baad ek callbackfunction use krsake

// placeOrder(preparingOrder); isse sirf placeOrder aur preparingOrder hi ho paa rha h par humein toh iske baad ke function pickuporder aur delivered ko bhi call krna h using callback function
// this is the way to callback function using callback hell


placeOrder(()=> {

    preparingOrder(()=> {

        pickupOrder(()=> {

            delivered();

        });

    });

});

// yha par callback aisa h ki callback ke andar ek function hain jo preparingOrder ko call kr rha h aur uss callback ko placeOrder ne apne argument se placeOrder function ke parameter mein bhej diya h phir usne uske andar hi callback ko call kiya jisse callback ne jaise hi call kiya uske andar ka preparingOrder call ho gya.
// callback = ()=> {
//     preparingOrder();
// }


// lekin callback hell ke kuch disadvantages hain 
// 1. pehla yeh ki bohot bekar readability hain iski yeh toh sirf 4function hain toh aisa hain aise hi 40function honge toh kitni readability kharab ho jaayegi
// 2. dependency ek function ke dependency dusre function par hain jaise preparingOrder ki dependency placeOrder par hain agar placeOrder galti se call nahi kiya toh preparingOrder run hi nahi hoga.
// toh yeh kuch disadvantages hain


// //----------  JS is a single threaded synchronous language -----------

// // isse kehte h single threaded synchronous language matlab ek ke baad ek line execute hogi multiple lines eksaath nahi ho sakti h
// console.log("10");//pehle yeh print hoga 

// console.log("20");// second yeh print hoga 

// console.log("30");//third yeh print hoga 

// ---------------Yha JS synchronous behaviour dikha rha h --------------


// yha par bhi 2sec wait kr rhe the par yha output line by line ke hisab se aaya 10 , 20 , 30.
console.log("10");
const timer = Date.now(); //date.now current time ko milliseconds mein covert krdeta h ; timer mein older time hain 
while(Date.now()-timer<2000){
    // yha date.now mein current time hain 
    // current time - old timer < 2sec
    // jab tak date.now-timer 2sec se chhote rhenge yeh loop chlta rhega phir iske baad 2sec ke equal hote hi loop se bahar aajayega aur phir loop ke bahar ka agla line print hoga
}

console.log("20");

console.log("30");
// -------------------- JS is also a asynchronous as well ---------------



// yha par js asynchronous jaisa behave krta h pehle ek line hoti h phir direct 3rd wali beech wali last mein ho rhi h , jabki line no 168 - 172 mein ek ke baad ek ho rhi h
// Yha JS asynchronous behaviour dikha rha h.
// yha par bhi 2sec wait kr rhe the par yha output asynchronous ke hisab se aaya 10 , 30 , 20.
console.log("10");//pehle yeh print hoga 


setTimeout(() => {
    console.log("20");//third yeh print hoga
}, 2000);


console.log("30");//second yeh print hoga  

