const Profession = document.getElementById("Select-Profession");
Profession.options[1].value = 400000;
Profession.options[2].value = 600000;
Profession.options[3].value = 200000;
Profession.options[4].value = 300000;
Profession.options[5].value = 0;



const Income = document.getElementById("Salary");


const Education = document.getElementById("Educational-Level");
Education.options[1].value = 20000;
Education.options[2].value = 40000;
Education.options[3].value = 60000;
Education.options[4].value = 10000;
Education.options[5].value = 300000;
// Problem
// for example :- When you write Education.value = 20000; instead of Education.options[1].value = 20000; or Education.options[2].value = 40000; or on any index 
//  aap directly bol rhe ho jitne bhi option h usmein se 20000 wala select krlo apne aap jo humein nahi chahiye 

// Solution
// humein chahiye ki hum select kre jo hum hain ex:- Engineer ; uske liye pehle <select> tag ke saare option ko value assign kre jaise upar kiya h ;  Education ne <select> tag ("Educational-Level")  ka access le liya h ex:- const Education = document.getElementById("Educational-Level");
// uske baad uske paanch options mein value assign kiya through indexing ex:- Education.options[1].value = 20000; Education.options[2].value = 40000;
//  phir (Education.value ) mein store ho jaayenge woh value ; jo select kiye gye h form mein ; upar diye hue paanchon mein se ek from line 14 to 18.
// Suppose the user clicks and selects "Bachelor's" i.e Education.options[3].value = 60000;
// Browser apne aap update krdega Education.value
// Now, Education.value is automatically set to "60000" (the value of "Bachelor's").
// If the user then selects "Diploma", Education.value becomes "40000".
// toh aise jo option select krenge ; koi bhi ho woh Eduaction.value mein store ho jaayega jo 

// aisa samjhe education father h aur yeh paanchon option uske child toh parent.value se parent ke andar jitne values h uska access le sakte h.

const Submit = document.getElementById("submit-button");
Submit.addEventListener("click", (event) => {

    const totalProfession = Number(Profession.value);
    const totalincome = Number(Income.value);
    
    const totalEducation = Number(Education.value);

const result = document.getElementById("Result");
// You can't write income + 15% directly in JavaScript because the language does not understand "15%" as a mathematical operation or value. JavaScript only works with numbers and mathematical operators like +, -, *, and / so wwe can write *0.15.
const dowry = Math.floor(totalEducation + totalProfession + (totalincome *7));
result.innerHTML = `Result : ${dowry}`;


})