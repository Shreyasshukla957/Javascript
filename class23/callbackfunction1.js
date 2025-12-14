

// // call back function
// function fetchuser (meet){
//     console.log("data fetching");

//     setTimeout(()=>{
//         console.log("data fetched");
//         // yeh name 'rohit' backend se aaya h isse fetchuser backend se le aaya h
//         const obj = {
//             name:"Rohit",
//             age:19,
//             phn:23724034834,
//          };

//         //  yha par meine fetchuser ko meet call krne diya h par fecthuser ke andar greet ko call kr rha hu toh greet hi call hoga , par aisa nahi chahte hum ki yeh mistake ho isiliye 2nd example jaise callback use krenge hardcode na krna pade aur jisse chahe usse call krde. 
//         greet(obj);
        

//     },2000)
        
    
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Hello ${name} i will meet you at this point` );
// }

// fetchuser(meet);

// Example :- 2 using callback humlog ek baar mein sabko call kr sakte h ex:- 
function fetchuser1 (callback){
    console.log("data fetching");

    setTimeout(()=>{
        console.log("data fetched");
        // yeh name 'rohit' backend se aaya h isse fetchuser backend se le aaya h
        const obj = {
            name:"Rohit",
            age:19,
            phn:23724034834,
         };

        //  ismein yeh fayda h meine 'obj' ka saara data ke baar mein bhej diya h ; ab har fucntion apne hisab se data legi aur manipulate krke ya bina krke use kregi ; bas ek baar data bhejo aur saare function iss data ko legi aur jis function ko dena h woh bhi bahar se function call krke dediya jaayega 
        // ex:- fetchuser1(meet) krke meet ko 'obj' ka data dediya gya h aur ab fetchuser1 mein koi ched chaad nahi hoga bas ek baar data bhejo saara kaam apne aap bahar ho jaayega call krne se lekar , data manipulation krna.
         callback(obj);
         
        
         
       

    },2000)
        
    
}

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

function meet(obj){
    console.log(`Hello ${obj.name} i will meet you at this point` );
}

function edit (obj){
    console.log(`Hello this is your age: ${obj.age} `);
}


// yha se humdirect call krsakte h using call back baar baar code nahi krna padega , hum yha se usse call krenge jisse hum run krana chahte h 
// agar upar jaise (lineno:20) uske andar se meet ya greet ko call krenge yha fetchuser1(greet) likha h aur fetchuser ke andar meet(obj.name) likha h toh woh meet ko call krega naa ki greet isse accha callback use krenge toh hum directly usse call krsakte h jisse hum chahte h jaise yha jab greet ko chahte h ya meet ko hum par depend krta h.
// agar humein maanlo user se data lekar sirf name print krana h yaa age krana h yaa kuch bhi particular user ko humein pata nahi kis  user par kya krna h yaa aisa maan lete h ki sirf ek ya do cheez krana h toh function ke andar thodi likhenge ki meet bhi krado greet bhi krado maanlo kisi user ko edit krana h toh woh bhi call thodi krenge function ke andar se isiliye hum callback use krenge jo krana hoga bahar se krdenge function ke andar baar baar ched chaad krne ki zarurat nahi h.
fetchuser1(greet);
fetchuser1(meet);
fetchuser1(edit);