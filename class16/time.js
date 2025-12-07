 // Key point :- kuch bhi manipulation ya perform krna h agar dom related toh yaad rakhna h pehle htmlcollection ya nodelist use krke usse
// object ke andar store krana h phir us object par hum kaam kr sakte h.


function timing (){

     const timer = document.getElementById('root');
    //  timer object h kyunki htmlcollection return object mein krte h isse yeh fayda h uss element ke related data manipulate ho sakta h .
    const now = new Date();
    const IndianTime = now.toLocaleTimeString(); //IndianTime is string because toLocaleTimeString() is time represented in text format within the string.
    // yha innerhtml waise hi work kr rhi h jaise objectname.propertyname use krte h (ex:- obj1.name = "shreyas";) innerhtml property jo hain DOM mein jo textnode wala kaam krti h aur timer object kaa naam h.
    // timer.innerHTML = "Hello Shreyas";
    // timer.innerHTML = now.toLocaleTimeString();
    // Or
     timer.innerHTML = IndianTime;


    
// body ko flex bnadiya jisse andar ka element(div"root") flexible ho gya
// const timerdad = document.getElementById("body");
// timerdad.style.height = "100vh" //height dena jaruri h warna body div"root" ke hisab se height set kr legi aone aap
// timerdad.style.display = "flex";
// timerdad.style.alignItems = "center";
// timerdad.style.justifyContent="center";

// div"root" ko flex bna diya jisse andar ka element flexible ho gya
timer.style.fontSize="100px";
// timer.style.display="flex";
// timer.style.height = "100vh" //height dena jaruri h warna div"root"  "IndianTime" ke hisab se height set kr legi apne aap
timer.style.justifyContent="center";
timer.style.alignItems="center";

const body = document.getElementById("body");
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100vh";

// body.append(timer);
}

setInterval(timing,1000);

  






