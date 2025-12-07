// we can iterate over an HTMLCollection using the .length property in combination with a traditional 'basic' for-loop as it has array like indexing system which has '.length' property which can be used to iterate over HtmlCollection.

// const collection = document.getElementsByClassName("myclass");

// for (let i = 0; i < collection.length; i++) {
//   // Access each element using collection[i]
//   collection[i].style.fontSize = "24px";
// }






// c: Accessing by CSS Selectors:
// Single Element
const id = document.querySelector('#first'); //in css '#' is used for id.
id.innerHTML = "Hello Money";

const id2 = document.querySelector('.header1');//in css '.' is used for class , yha sirf ek hi class mein manipulation hoga even though there are multiple classes of same name par yha par (Accessing by CSS Selectors:Single Element) se ho rha h toh single element hoga
// id2.style.backgroundColor = "pink";
// const id5 = document.querySelector('li');
// both are same dono first li ko pakad ke le aayenge kyunki queryselectorALL nahi h
const id5 = document.querySelector('ul li');

console.log(id5);

// Multiple Elements:
// we can manipulate multiple classes of same name using querySelectorAll index like array[0] , [1] , [2] etc...
const id3 = document.querySelectorAll('.header1');
id3[2].style.backgroundColor="red"; 
console.log(id3.length);

// Tag name bhi use krsate h ex:- h1 , p , li , ul
const id4 = document.querySelectorAll('li');
// both are same dono multiple list ko pakad ke le aayenge 
// const id4 = document.querySelectorAll('ul li');
console.log(id4);

// How to Iterate over Node List.
// we can iterate over an Nodelist using the (.length) property in combination with a traditional 'basic' for loop as it has array like indexing system which has '.length' property which can be used to iterate over Nodelist same as HtmlCollection.
for(let i = 0 ; i < id3.length ; i++){
    id3[1].style.backgroundColor = "blue";
}

const obj = document.getElementsByClassName("header1");
undefined
for(let i = 0 ; i < obj.length ; i++){
    console.log(obj);
}

//  for-of loop can be used  here as well , as it has length which can be iterated unlike typical object which cannot be iterated.
for(let key of id3){
    console.log(key);
}

// for-each can be used here as well taking one by one input from id3
id3.forEach((val)=>{
    console.log(val);
});

// or

// function iterate (value){
//     console.log(value);
// }

// id3.forEach(iterate);

// How to convert NodeList into Array.
// array mein isiliye kr rhe taaki arrays ke properties use kr sake jaise push , pop , map etc Array.from(object) object ko array mein nahi convert kr sakta h bas htmlcollection/nodelist/string ko covert kr sakta h.
// aur array.from se convert hone ke baad usmein aur normal array mein koi faraq nahi rehta dono same property use kr sakte h .
// Array.from(obj) ;
Array.from(id3) ;


// -----------------------------------------------------------------

// d: Accessing by tag name
const tag = document.getElementsByTagName('li');
console.log(tag);

// iterating thorugh for and for-of loop forEach

for(let i = 0 ; i <tag.length ; i++){
    tag[i].black;
}

for(let val of tag){
    console.log(val);
}

Array.from(tag);
// Array.from does not entirely converts 'tag' into array it just adds the property which helps in iteration like array.

Array.from(tag).forEach((val) => {
    console.log(val);
})

// ----------------------------------------------------------------















