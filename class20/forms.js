// types of Event

// const form = document.getElementById("form"); //OR
const form = document.querySelector("#form");

// pehle input daalenge toh hi eventlistener active hoga aur jo input daalte jaayenge woh input ka access milte jaayega bubbling ke through
// form.addEventListener("input",(event)=>{

//      console.log(event.target);
//     console.log(event.target.value);

// })

// jaise hi place change krenge , dusre jagh jaayenge data daalne ke baad pehle jagah se toh waha jaate hi pehle jagah ke data ka access mil jaayega through bubbling
// form.addEventListener("change",(event)=>{

//     console.log(event.target.value);

// })

// yha par focus kaam nahi krega kyunki focus bubbling nahi krta , iska matlab woh data ko parent (form) ke pass nahi bhejega iske badle hum 'focusin' use krsakte h , focus use krne ke liye uske khud ke upar eventlistener use krna padega.
// form.addEventListener("focus",(event)=>{

//     console.log(event.target);

// })

// focusin kya karega , jaise hi click krenge kisi jagah par waha focus ho jaayega aur data ka access mil jaayega
// form.addEventListener("focusin",(event)=>{

//     console.log(event.target.value);

// })

// focusout jaise hi bahar jaaoge present input field ke waha focus ho jaayega
// form.addEventListener("focusout",(event)=>{

//     console.log(event.target.value);

// })

// form.addEventListener("click",(event)=>{

//     console.log(event.target.value);

// })

// form.addEventListener("dbclick",(event)=>{

//     console.log(event.target.value);

// })

// bas button type reset rakh dene ka
// form.addEventListener("reset",(event)=>{

//     // console.log(event.target.value);
//     console.log("form reset"); //button mein jaakar type="reset" set krna padega tabhi reset hoga

// })

// // bas button type submit rakhdene ka
// form.addEventListener("submit", (event) => {
//   console.log(event.target);
// });

form.addEventListener("submit", (event) => {

  // isse use krke form submit krenge toh refresh nahi hoga data save rhega
  event.preventDefault();

  const firstname = document.getElementById("input1");
  console.log(firstname.value);

  const secondname = document.getElementById("input2");
  console.log(secondname.value);

  const thirdname = document.getElementById("input3");
  console.log(thirdname.value);

  // yha par toh sirf 3 input h toh ek ek karke access le rhe h yahi agar 100 input field rehte toh kaise hum access lete
  // toh ek object hota h FormData naam ka uske andar saara access rehta h form ka , bas form ka naam daalna h yha 'form'
  const data = new FormData(form);
  console.log(data);
  console.log(data.keys());
  console.log(data.values());
    // yeh iterator deta h toh iterator ko Arrays mein convert kr sakte h Array.from(data.keys()) isse array mein convert ho jaayega aur phir array par iterate kr sakte h , ya direct iterator par iterate kr sakte h for-of loop se
    //iss 'data' object ke andar form ka saara data h key - value pair mein ex:- first name : shreyas ;
    // yeh data.keys() yaa data.values() krne par iterator dikhata h naa ki Object.keys(obj); ki tarah list of keys nahi deta
    // ab hum iterator use kr sakte h iterate krne ke liye using for-of loop ya isko hum array mein convert krke (.keys\ .entries \ .values )se data ko access kr sakte h

  // yeh data.keys() par iterate hokar key deta h
  for (let key of data.keys()) {
    console.log(key);
  }

  // yeh data.entries par iterate hokar key-value dono deta h
  for (let key of data.entries()) {
    console.log(key);
  }

  // destructure krke array ki tarah
  for (let [key, value] of data.entries()) {
    console.log([key, value]);
  }

  // console.log(Array.from(data.keys()));
  // console.log(Array.from(data.values()));
  // console.log( Array.from(data.entries()));

  const result = document.getElementById("result");
  result.innerHTML = `${firstname.value} ${secondname.value} is a Boy`;

  // yha par body ke andar append krna padega warna result bahar show krega
  form.appendChild(result);

});
