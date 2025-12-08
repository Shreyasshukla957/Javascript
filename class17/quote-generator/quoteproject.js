const quotesArray = [
  "The best way to predict the future is to create it.",
  "Do not wait to strike till the iron is hot; but make it hot by striking.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Happiness is not something ready made. It comes from your own actions.",
  "In the middle of every difficulty lies opportunity.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The only way to do great work is to love what you do.",
  "You miss 100% of the shots you don’t take.",
  "Strive not to be a success, but rather to be of value.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Dream big and dare to fail.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t be afraid to give up the good to go for the great.",
  "I find that the harder I work, the more luck I seem to have."
];

// const colors = [
//   "#00FFFF", // Radiant Cyan
//   "#FF00FF", // Radiant Magenta
//   "#FFFF00", // Radiant Yellow
//   "#FFA500", // Radiant Orange
//   "#00BFFF", // Radiant Blue
//   "#FF69B4", // Radiant Pink
//   "#00FF7F", // Radiant Green
//   "#8A2BE2"  // Radiant Violet


// ]; 


const color = [
  // Emerald to sand (your example)
  "radial-gradient(circle at 80% 40%, #50c878 0%, #ffe4b5 100%)",
  // Teal to blush
  "radial-gradient(circle at 60% 40%, #5c8374 0%, #e9b4c9 100%)",
  // Blue to peach
  "radial-gradient(circle at 30% 70%, #7fb3d5 0%, #ffd6c0 100%)",
  // Mint to rose
  "radial-gradient(circle at 70% 30%, #a3d5d3 0%, #f7b2ad 100%)",
  // Aqua to apricot
  "radial-gradient(circle at 80% 80%, #48c6ef 0%, #ffb88c 100%)",
  // Olive to lavender
  "radial-gradient(circle at 20% 20%, #b7c59c 0%, #e1bee7 100%)",
  // Sage to coral
  "radial-gradient(circle at 50% 50%, #b5c9b8 0%, #ff7e67 100%)",
  // Sky blue to pale gold
  "radial-gradient(circle at 40% 60%, #7ec8e3 0%, #ffe066 100%)",
  // Seafoam to soft pink
  "radial-gradient(circle at 60% 60%, #a8dadc 0%, #ffb6b9 100%)",
  // Light cyan to dusty rose
  "radial-gradient(circle at 80% 20%, #b8e0dc 0%, #eab0bc 100%)",
  // Lilac to lemon
  "radial-gradient(circle at 70% 70%, #b39ddb 0%, #fff59d 100%)",
  // Forest to salmon
  "radial-gradient(circle at 20% 80%, #228b22 0%, #ff9999 100%)",
  // Navy to sand
  "radial-gradient(circle at 30% 30%, #23395d 0%, #ffe4b5 100%)",
  // Plum to mint
  "radial-gradient(circle at 60% 80%, #8e44ad 0%, #7fffd4 100%)",
  // Indigo to rose
  "radial-gradient(circle at 40% 20%, #6a0572 0%, #ffb6b9 100%)",
  // Lemon to periwinkle
  "radial-gradient(circle at 50% 70%, #fff44f 0%, #b0a8f0 100%)",
  // Azure to blush
  "radial-gradient(circle at 20% 60%, #007fff 0%, #ffb6b9 100%)",
  // Ruby to mint
  "radial-gradient(circle at 70% 50%, #e0115f 0%, #98ff98 100%)",
  // Magenta to turquoise
  "radial-gradient(circle at 80% 60%, #ff61a6 0%, #40e0d0 100%)",
  // Pale green to soft orange
  "radial-gradient(circle at 60% 20%, #c3f584 0%, #ffd6a5 100%)",
  // Green to coral
  "radial-gradient(circle at 60% 40%, #5bbd92 0%, #ff7e67 100%)",
  // Blue to gold
  "radial-gradient(circle at 40% 60%, #4f8edc 0%, #ffe066 100%)",
  // Purple to mint
  "radial-gradient(circle at 70% 30%, #a084ee 0%, #7fffd4 100%)",
  // Navy to peach
  "radial-gradient(circle at 30% 70%, #23395d 0%, #ffd6c0 100%)",
  // Orange to cyan
  "radial-gradient(circle at 80% 20%, #ffb347 0%, #7fdbff 100%)",
  // Red to blue
  "radial-gradient(circle at 20% 80%, #ff5e62 0%, #5bc0eb 100%)",
  // Violet to lime
  "radial-gradient(circle at 50% 50%, #b388ff 0%, #baffc9 100%)",
  // Indigo to rose
  "radial-gradient(circle at 60% 60%, #6a0572 0%, #ffb6b9 100%)",
  // Aqua to apricot
  "radial-gradient(circle at 80% 80%, #48c6ef 0%, #ffb88c 100%)",
  // Olive to lavender
  "radial-gradient(circle at 20% 20%, #b7c59c 0%, #e1bee7 100%)",
  // Plum to sky blue
  "radial-gradient(circle at 70% 70%, #8e44ad 0%, #87ceeb 100%)",
  // Teal to yellow
  "radial-gradient(circle at 30% 30%, #20b2aa 0%, #fff176 100%)",
  // Magenta to turquoise
  "radial-gradient(circle at 60% 80%, #ff61a6 0%, #40e0d0 100%)",
  // Forest to salmon
  "radial-gradient(circle at 80% 60%, #228b22 0%, #ff9999 100%)",
  // Midnight to gold
  "radial-gradient(circle at 40% 20%, #191970 0%, #ffd700 100%)",
  // Ruby to mint
  "radial-gradient(circle at 70% 50%, #e0115f 0%, #98ff98 100%)",
  // Sky blue to orange
  "radial-gradient(circle at 50% 70%, #87ceeb 0%, #ffb347 100%)",
  // Lemon to periwinkle
  "radial-gradient(circle at 60% 20%, #fff44f 0%, #b0a8f0 100%)",
  // Azure to blush
  "radial-gradient(circle at 20% 60%, #007fff 0%, #ffb6b9 100%)",
  // Emerald to sand
  "radial-gradient(circle at 80% 40%, #50c878 0%, #ffe4b5 100%)"
];






function quotesrandom (){

const quotes = document.getElementsByClassName("quote")[0];
const random = Math.floor(Math.random()*quotesArray.length)
quotes.innerHTML=quotesArray[random];
const body = document.querySelector('.body');
const random2 = Math.floor(Math.random()*color.length)
body.style.background = color[random2]
// for(let i = 0 ; i< color.length;i++){

//   body.style.backgroundColor = color[i];


// } this methods is too fast so it ends up with last bgc.


}

setInterval(quotesrandom,2000);















