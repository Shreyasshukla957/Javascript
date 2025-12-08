// creating new elementm-------------------------------------------------
// creating child 'list' using createElement through DOM
const element = document.createElement('li');
element.innerHTML = "TS";

// yha par humne pehle list bnaya h createElement ki madad se phir uske baad humne 'root'ko object parent ke andar store kraya h taaki manipulate kr sake , phir uske baad jo child element h 'list' usko add kradiya 'root' mein using 'appendchild'.
// const parent = document.getElementsByClassName('root')[0];
// Or
const parent = document.querySelector('.root');
// appendchild is used to add child in parent element overhere 'list' is the child which is being added in the parent 'root'.
parent.appendChild(element);

// aise bohot baar humein bohot element add krane padsakte h jaise "TS" add kiya h toh iska function hi bnalo
function attach(content, type) {

    let element = document.createElement(type);
    element.innerHTML = content;

    let element2 = document.createElement(type);
    element2.innerHTML = content + "V2.0";
    const parent = document.querySelector('.root');
    // parent.appendChild(element);
    // using append we can add multiple element and appendchild can only add one element.
    parent.append(element, element2)

};

attach("React", 'li',);
attach("Node", 'li',);
attach("Mongo", 'li',);

// Create textNode ----------------------------------------------------

const text = document.createTextNode("HelloDear");
// text.innerHTML= "HelloDear";

const parent2 = document.getElementsByClassName("root")[0];
parent2.append(text);



// create AttributeNode--------------------------------------------------

// const element3 = document.createAttribute("class");
// element3.value="first";

// // Adding Attribute in element we want , here it is 'li'.
// // const list = document.querySelector('li');
// // OR
// const list = document.querySelectorAll('li')[numbers];
// list.setAttributeNode(element3);
// // OR
// // parent2.children[1].setAttributeNode(element3);


// ek saath sabko same className dena h toh loop use kr sakte h
function eksaath(numbers) {

    const element3 = document.createAttribute("class");
    element3.value = "first";

    const list = document.querySelectorAll('li')[numbers];
    list.setAttributeNode(element3);
}


for (let i = 0; i < 10; i++) {
    eksaath(i);
}

// accessing attribute of element

const attribute = document.getElementsByClassName('root')[0];
console.log(attribute.getAttribute('id'));
attribute.setAttribute("custom", "20");
// name of class changed from root -> joe.
attribute.setAttribute("id", "joe");
// removing attribute
attribute.removeAttribute("custom");




// Add nodes to the DOM--------------------------------------------------

const parents1 = document.getElementsByClassName('root')[0];
const elements1 = document.createElement('li');
elements1.innerHTML = "TS";

// parents1.prepend(elements1);//sabse aage chla jaayega list mein
parents1.append(elements1);//sabse last mein chla jaayega list mein

const child2 = parents1.children[1];
// sabse pehle jiske pehle elements ko insert krna h uska bhi access lena padta h jaise elementcreate krne ke liye 'root' ka access chahiye tabhi 'li' root naam ke 'ul' mein rakh  ; h upar wale example mein hum dekh sakte h.
//child2 ke pehle elements1 ("TS") ko insert krdiya 
// parents1.insertBefore(elements1,child2);

// replace krdeta h ek child ko dusre child se yha TS ne HTML ko replace kr diya. 
// parents1.replaceChild(elements1,child2);

// parent element ke innerHTMl ka naam assign krnge toh andar ke saare children ko hata kar sirf naam dikhayega , isse bachne ke liye '+=' sign use krenge toh existing elements bhi dikhayega aur uske saath naam bhi.
// It is same as parents1.innerHTML = parents1.innerHTML + "TS" 
parents1.innerHTML += "<li>TS</li>";


// element 'em' jo ek 'div' h usko 'parents1' , jiska naam 'root' h usse aage rakhna h toh uske liye 'insertAdjacentElement use krenge isse hum 'em' element ko 'parents1' ke adjacent rakh sakte h.
// beforebegin , afterend
// afterbegin  mein 'em' jo h parents1 ka first child bn jaayegas
// beforeend  mein 'em' jo h parents1 ka last child bn jaayegas
const em = document.createElement("div");
em.innerHTML = "Hello Coder Army";
// parents1.insertAdjacentElement("beforebegin" , em);
// parents1.insertAdjacentElement("afterend" , em);
// parents1.insertAdjacentElement("afterbegin" , em);
// parents1.insertAdjacentElement("beforeend" , em);

// Deleting node or element
const firstlist = document.querySelector('li');
firstlist.remove();
// .removeChild(node) H.W






