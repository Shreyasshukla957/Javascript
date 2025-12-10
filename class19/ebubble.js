

// function color(number) {

//     const root = document.getElementById("root");
//     const button = document.querySelectorAll("button")[number];
//     button.addEventListener("click", () => {
//     const background = ["red", "blue", "green", "yellow","pink","teal","orange","white","lightblue"];

//         const randomcolor = Math.floor(Math.random() * background.length);
//         root.style.backgroundColor = background[randomcolor];
//         button.innerHTML = background[randomcolor];

//     });

// }        
            
// color(3);


// OR 2nd Way

const root = document.getElementById("root");
const buttons = document.querySelectorAll("button");

// forEach goes through all buttons once before any button is clicked.
// it goes on every button one by one but before clicking any button , it is already iterated over every button adn that's why when i click any button the event triggers and changes are done , because everybutton has been attached with addEventListener() by forEach(). 

// buttons.forEach((button)=>{

//    button.addEventListener("click",(event)=>{
//         root.style.backgroundColor = button.id;
        
//    })



// });


// this can work as well
// for(let i = 0; i < buttons.length; i++) {  // No ()
//     buttons[i].addEventListener("click", (event) => {
//         root.style.backgroundColor =event.target.id;  // Works but stale closure risk
//         console.log(event.target.id);
//     });
// }

// using eventdelegation

root.addEventListener(("click"),(event)=>{
    // console.log(event.target.tagName);
    // if(event.target.tagName==="BUTTON"){

    root.style.backgroundColor = event.target.id;
    //bina if statement k bhi white color nahi hota Background Color Changer ko click krke kyunki usko meine id hi nahi diya h aur backgroundcolor tab change hoga jab uski id ho white name ki
    console.log(event.target.id);

// }
   
})


