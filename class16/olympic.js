function now (){

const timer1 = document.getElementsByClassName('days')[0];
//  document.getElementsByClassName('days') always returns an HTMLCollection, which is like an array (or list) of all elements with the class name 'days', even if there is only one such element.
const timer2 = document.getElementsByClassName('hours')[0];
const timer3 = document.getElementsByClassName('minutes')[0];
const timer4 = document.getElementsByClassName('seconds')[0];
const timer5 = document.getElementsByClassName('body')[0];
const date = new Date();
const date2 = new Date("2028-07-14");

const date3 = date2 - date;
console.log(date3);

// const days = Math.floor(date3/(1000*60*60*24));
const days = Math.floor(date3/(1000*60*60*24));
const hours = Math.floor((date3/(1000*60*60)%24));
const minute = Math.floor((date3/(1000*60)%60));
const seconds = Math.floor((date3/(1000)%60));


timer1.innerHTML = days;
timer2.innerHTML = hours;
timer3.innerHTML = minute;
timer4.innerHTML = seconds;


// timer1.style.alignItems="center";

}



setInterval(now,1000);




/*
===============================
 Countdown Timer – Final Summary
===============================

1. JavaScript mein `new Date()` hamesha time ko milliseconds (ms) mein store karta hai.  
2. `date2 - date1` karke hum dono dates ke beech ka difference in ms nikalte hain.  
3. Ye number bahut bada hota hai, jo human ke liye readable nahi hai.  
4. Isliye isko days, hours, minutes, seconds mein todna padta hai.  
5. Conversion rules: 
   - 1 sec = 1000 ms
   - 1 min = 60,000 ms
   - 1 hr  = 3,600,000 ms
   - 1 day = 86,400,000 ms  

6. Days = Math.floor(date3 / (1000*60*60*24))  
   -> total ms ko ek din ke ms se divide karke days nikalte hain.  

7. Hours = Math.floor((date3 / (1000*60*60)) % 24)  
   -> total hours nikal kar %24 se ek din ke andar ke bache hue ghante milte hain.  

8. Minutes = Math.floor((date3 / (1000*60)) % 60)  
   -> total minutes nikal kar %60 se ek ghante ke andar ke bache hue minutes milte hain.  

9. Seconds = Math.floor((date3 / 1000) % 60)  
   -> total seconds nikal kar %60 se ek minute ke andar ke bache hue seconds milte hain.  

10. Math.floor() ka reason: 
    -> decimal cut ho jaye, incomplete units ignore ho (25.8 din = 25 din).  

11. % (modulus) ka reason: 
    -> har unit apni limit ke andar aaye 
       (hours = 0–23, minutes = 0–59, seconds = 0–59).  

12. Real-life analogy: 
    -> Jaise 1 litre ko 1000 ml mein convert karke 500 ml se divide karte hain.  
    -> Waise hi ms ko days/hours/minutes/seconds mein convert karna padta hai.  

13. Agar % na lagate to hours ka answer 500+ aa sakta tha, 
    jo countdown ke liye galat hota.  

14. setInterval(now, 1000) har 1 second baad function ko call karta hai, 
    jisse countdown live update hota hai.  

15. Reason divide karne ka yeh hai: 
    -> Computer ke liye ms easy hai, 
    -> Human ke liye din/ghante/min/sec easy hain.  

16. Days ko divide karke total din nikalte hain, 
    aur remainder se hours/minutes/seconds nikalte hain.  

17. Agar Math.floor aur % use na karein to 
    -> countdown galat ya decimals ke saath dikhai dega.  

18. Har unit ke liye rule same hai: 
    total ms ÷ unit ms = value, 
    aur remainder (% operator) se agla unit nikalta hai.  

19. Final output: 
    ek accurate aur continuously updating countdown timer 
    jo user ko clear din, ghante, minute aur second dikhata hai.  

===============================
*/
