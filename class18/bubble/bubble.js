// humein yha circle ko create krna h aur access lena h agar hum html mein bnayenge toh pehle se hi ek circle dikhayega par humein chahiye ki jab hum body par click kre tab circle create ho aur agar pehle se hi ek html mein created rhega toh woh body par click krne ke baad nahi dikhayega aur yeh bhi h ki humein multiple circle chahiye click krne par jo ki tabhi possible h jab hum usse document.addEventListener ke andar banyenge isse hoga yeh jaise hi click hoga body par har click ke saath function run hoga aur circle bn jaayega par premeditated circle jo html mein bnega woh har click par circle nahi bnayega.


document.addEventListener("click",(event)=>{


let hii = ["hello" , "namaste", "hii" , "wow" , "kya!" , "chal" , "hat" , "bhaag" , "chutiya","jhaa2"];
    let random = hii[Math.floor(Math.random()*hii.length)];
    const circle = document.createElement("div");
    circle.innerHTML=String(random);
    circle.className="circle";
    document.body.appendChild(circle);
    const x = event.clientX;
    const y = event.clientY;

    
    const bgc = ["#3A9AD9","#F28C28","#6BCB77","#D94F70","#8E44AD","#F2D398","#2E4057"]; 

    

    
    
    //Or 2nd option is also acceptable in JS

    // const bgc = [
//   "SteelBlue",    // #3A9AD9
//   "Deep Saffron", // #F28C28
//   "Medium Aquamarine", // #6BCB77
//   "Paradise Pink", // #D94F70
//   "Amethyst",     // #8E44AD
//   "NavajoWhite",  // #F2D398
//   "Charcoal"      // #2E4057
// ];

    circle.style.backgroundColor = bgc[Math.floor(Math.random()*bgc.length)];

    // setTimeout isiliye lagaya gya h kyyunki jitne baar click krnge utne baar yeh function run hoga utne baad circle element create hoga toh setTimeout lagane se jo circle element create honge , given time mein hat jaayenge

 
    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;


    setTimeout(()=>{
        // circle remove ho jaayega 5sec mein 
        circle.remove();
    },5000)


})

// Circle body me create hota hai, par screen me kahaan dikhna hai woh CSS decide karti hai, creation nahi.
// position: absolute lagate hi hota yeh h ki parent ke hisab se child ka position set hoga yha body ke position ke hisab se circle display hoga , body pura page h aur child agar position:absolute h toh child ka x aur y value mil jaayega event.x aur event.y se toh woh display apne parent ke hisab se hoga 
// agar event.x :"220px" h aur event.y:"300px" h aur circle absolute position par set h toh display woh parent container se 220px left aur 300px right par hoga. 