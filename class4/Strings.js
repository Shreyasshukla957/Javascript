// STRINGS
// Sequence of Character

let firstName = 'Shreyas';
let lastName = 'Shukla';

// New way to create String will always show object typeof because of new keyword it stores data in heap memory
let first = new String ("Shre Shuk");
console.log(first);
console.log(typeof(first));


// Temple String
let sent = `Shreyas
Hemant
Shukla`;
console.log(typeof(firstName));
console.log(sent);

let op1 = 'English';
let op2 = 'Hindi';

// Concatenate
let ans = op1 + op2 ;
console.log(ans);

// Concatentaion Through Temple String
let finalAns = `${op1+op2}`;
let finalAns2 = `${op1}${op2}`;
console.log(finalAns);
console.log(finalAns2);
// Length of String
console.log(ans.length);

// Next line 
let naming = "Shreyas Shukla Bahut Bada BusinessMan hain.\nAur woh ek din desh ka maalik banne wala h "
console.log(naming);

// Uppercase ot Lowercase
// Jab String ko upper ya lower case mein modify krte h toh jo result rehta h woh dusra string ka rehta h original string par modification nahi hota h 
console.log(op1.toUpperCase());
console.log(op1.toLowerCase());


// Split Method
let sentence = "Kaise / ho / Saare";
let words = sentence.split('/');
console.log(words);
let sentence2 = "Kaise\"ho\"Saare";

let words2 = sentence2.split('  ');
console.log(words2);


// Escape Character (Backslash ('\') next character ko normal character ki tarah  treat  krta h aur khud ek special character h toh agar backslash ko normal dividing character ki tarah treat krna h toh ek aur backslash lagado)

let naming2 = "Shreyas Shukla Bahut Bada BusinessMan hain.\\nAur woh ek din desh ka maalik banne wala h "
console.log(naming2);

// Spliting

let sentence3 = "Hello /Dear /Kaise /ho /Aap";
let words3 = sentence3.split('/');
console.log(words3);
let sentence4 = "Hello \\Kya \\Haal \\Chal \\Hai"
console.log(sentence4.split('\\'));


// Joining Method 
console.log(words3.join(''));



// Index of = will give index of first character present in the string otherwise it'll give -1 if not present in the given string.
let hero = " Hello Shreyas Army";
console.log(hero.indexOf("Shreyas"));

// Last Index of = will give index of first character in result , if the same string is present in the last otherwise it'll give -1 if not present in the given string.
let hero2 = " Hello Shreyas Army Shreyas";
console.log(hero2.lastIndexOf("Shreyas"));

// Includes will result true / false , if the asked string is present or not .
let hero3 = " Hello Shreyas Army Shreyas";
console.log(hero3.includes("Shreyas"));

// Slicing can take negative index also
let newstring = "HelloDon";
console.log(newstring.slice(0,3));
console.log(newstring.slice(-5,-3));


// Substring
let str = "Babbar";
console.log(str.substring(2));
console.log(str.substring(2,4));
let special = "Shreyas"
console.log(special[4]); // OR
console.log(special.charAt(3));

// replacing content
let str12 = "Hello Dear Kaise ho Aap";
console.log(str12.replace("Dear","Jii"));
// to replace word present multiple time 
let str19 = "Hello Dear Kaise ho Aap Dear";
console.log(str19.replaceAll("Dear","Jii"));

// Trimming
let str10 = "  Hiii Everybody";
console.log(str10.length);
// Starting and Ending space is eliminated when trim is used
console.log(str10.trim());
console.log(str10.trim().length);



