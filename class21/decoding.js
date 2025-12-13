const obj1 = {
    question: "Who won the ICC Cricket World Cup in 2019?",
    options: ["England", "New Zealand", "Australia", "India"],
    answer: "England"
};

const obj2 = {
    question: "How many players are there in each cricket team on the field during a match?",
    options: ["9", "10", "11", "12"],
    answer: "11"
};

const obj3 = {
    question: "Which player has scored the most runs in Test cricket?",
    options: ["Sachin Tendulkar", "Brian Lara", "Jacques Kallis", "Ricky Ponting"],
    answer: "Sachin Tendulkar"
};

const obj4 = {
    question: "What is the maximum number of overs in a One Day International (ODI) match?",
    options: ["20", "50", "60", "40"],
    answer: "50"
};

const obj5 = {
    question: "Which country hosted the first ever Cricket World Cup?",
    options: ["England", "Australia", "India", "West Indies"],
    answer: "England"
};

const obj6 = {
    question: "Who is known as the 'Master Blaster' in cricket?",
    options: ["Virat Kohli", "Brian Lara", "Sachin Tendulkar", "MS Dhoni"],
    answer: "Sachin Tendulkar"
};

const obj7 = {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
    answer: "Muttiah Muralitharan"
};

const obj8 = {
    question: "What is the term used when a batsman scores 100 runs in a single innings?",
    options: ["Century", "Half-century", "Double century", "Triple century"],
    answer: "Century"
};

const obj9 = {
    question: "Which team has won the most ICC T20 World Cups?",
    options: ["India", "West Indies", "England", "Pakistan"],
    answer: "West Indies"
};

const obj10 = {
    question: "Who was the captain of the Indian cricket team during the 2011 World Cup?",
    options: ["MS Dhoni", "Sachin Tendulkar", "Virat Kohli", "Rahul Dravid"],
    answer: "MS Dhoni"
};


const totalquestion = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];

function randomquestion() {

    const data = new Set();
    console.log(data.size);

    // // use set for unique object

    while (data.size < 5) {
        const index = Math.floor(Math.random() * totalquestion.length);
        data.add(totalquestion[index]);
        // yeh kaam normal array mein bhi ho sakta tha question add krane ka par dikkat yeh h yha woh random number chahiye tha jo return naa ho isiliye 'set' ka use hua h.
    }

    // // convert set into array taaki kisi bhi 5 random question ka access le sakte h , agar yeh set form mein return krenge toh loop chalakar access lena padega
    // return [...data];

    // Using Sort but it's T.Complexity is more worse than above one
    // totalquestion.sort(()=> Math.random()-0.5);
    // return totalquestion.slice(0,5);
    // slice alag array bnata h usmein woh random 5 elements ko daal dega , totalquestion array mein manipulation nahi hoti hain
    

    // best way coz it's T.C is 0(1)
    const arr = [];
    let length = totalquestion.length;

    for(let i = 0 ; i < 5 ;i++){
        const index =Math.floor (Math.random()*length) ;
        arr.push(totalquestion[index]);
        
            let temp = totalquestion[index];
            totalquestion[index]=totalquestion[length-1];
            totalquestion[length-1]=temp;
            length--;
       
    }

    return arr;



}


// select the form and insert all elements into it
const form = document.querySelector("form");

const problem = randomquestion();
// obj ke andar ek ek karke 5 random object aayenge ex:- obj1 , obj5 , obj9 , obj11 , obj19
// index mein index dega jo array ko bula rha h uska ex:- obj1 ko bulaya toh uska index 0 hain.


// key-value pair mein question:answers daalenge ex: q1:sunil gavaskar
const ans = {};

problem.forEach((obj, index) => {

    const div = document.createElement("div");
    div.className = `quiz${index + 1}`;

    ans[`q${index+1}`] = obj["answer"];
    // same as 
    // ans.key = value or ans[key] = value;

    const para = document.createElement("p");
    para.textContent = `${index + 1}. ${obj.question}`;
    // or obj["question"]
    div.appendChild(para);

    // create 4 options
    //ab jitne options aayenge for each se utne ke liye lable bnega 
    obj.options.forEach((value) => {

        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        // yeh index problem wale forEach ke index se liya jaayega agar obj wale se  liya jaata toh input.name change hote jaata 
        input.name = `q${index + 1}`;
        input.value = value;


        label.appendChild(input);
        label.appendChild(document.createTextNode(value));

        div.appendChild(label);
        div.appendChild(document.createElement("br"));

    })




    form.appendChild(div);


})

const button = document.createElement("button");
button.type = "submit";
button.id = "Submit";
button.innerHTML = "Submit";

form.appendChild(button);

const result = document.createElement("div");
result.id="Result";
form.appendChild(result);





form.addEventListener("submit", (event) => {

    event.preventDefault();

    const data = new FormData(form);




    let number = 0;

    for (let [key, value] of data.entries()) {
        if (value === ans[key]) {
            number++;
        }
    }


    
    result.innerHTML = `Result: ${number} out of 5`;
//    form.reset();



})

// arr.sort() use krke hum aur optimized tareeke se isko solve kr sakte h jismein timecomplexity kam lagegi

// pr js mein arr.sort ko direct number mein use nahi kr sakte 
// ex:- yha par sort  kre toh 10 , 20 , 100 aana chahiye
let arr = [10,100,20];
console.log(arr.sort());
// par 10,100,20 hi aarha h ; iska reason h ki 10 aur 100 compare krta h aur 10 chhota hota toh aage jaata h par sirf yhi reason nahi h woh 'string' treat krta h aur uska ascii value dekhta h 10 , 100 dono 1 se start hota h dono ka same ascii hain par 100 aur 20 mein 100 , 1 se start hota h aur 20 , 2 se yha 1 ka ascii value chhota h jiske wajah se 100 aage aata h aur 20 baad mein 

// ab agar humein isse sahi krna h toh humein yeh krna hoga ki arr.sort() ko callback function dena padta h usmein humein 2no dene padenge 
// example samjhe ki:- a = 100 , b = 20
// toh agar a-b krenge agar no positive aaya jo ki yha aayega toh 20 aage aajayega aur 100 uske baad par agar b-a hua aur answer negative aayega jo ki yha hoga toh 20 aage rhega aur 100 uske baad.
// yha bhi yhi method follow ho rha h
console.log( arr.sort((a,b)=> a-b )); 







