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

// e. accessing by parentelement or parentnode

const list = document.querySelector('li');
console.log(list);

console.log(list.parentElement);
// OR
console.log(list.parentNode);


const unord = document.querySelector('ul');
console.log(unord);
console.log(unord.childNodes); //yha par childnodes childnodes ko toh display krte hi h par textnodes ko bhi krte h display ; 'textnodes' woh space h between ex:-  <li> CN <li> to <li> Js <li> 5 spaces h toh 5 textnodes aur 4 childnodes h CN , HTML , CSS , JS toh 9nodes dikha rha h
console.log(unord.childNodes[0]); //yha par btayega textnode h 0th index par
console.log(unord.children);//yeh ek htmlCollection h aur 'childNodes' ek nodelist ; yha par 'children' mein sirf children btayega unlike 'childrenode' jo childnodes+txtnode dono btata h ; yeh ek faraq h htmlcollection mein aur nodelist mein 

// -------------------------------------------------------------------

 // e. accessing by first and last child 
 console.log(unord.firstChild);//yeh node h toh textnode bhi de sakta h warna element dega first child element
 console.log(unord.firstElementChild);// yeh htmlCollection h toh sirf element dega first child element

console.log(unord.lastChild);//yeh node h toh textnode bhi de sakta h warna element dega last child element

 console.log(unord.lastElementChild);// yeh htmlCollection h toh sirf element dega ; last child element


// ----------------------------------------------------------------------

// f. Sibling nodes element.nextSibling , element.previousSibling
// element.nestElementSibling , element.previousElementSibling.


// ----------------------------------------------------------------------

// innerHTML
// textContent
// innerText













