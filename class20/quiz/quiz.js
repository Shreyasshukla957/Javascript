const form = document.getElementById("form");

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    // array ke form mein rakhne ka problem yeh h ki agar meine sirf ek input select kiya form mein ex:- abdevilliers toh woh values[1] ho jaayega par ans[1] toh sunilgavaskar h abdevilliers sahi toh h lekin woh ans[4] compare krne par sahi h naaki ans[1] sirf ek select krunga toh values[1]===ans[1] se hoga jo ab===sunil hoga jo galat btayega issi problem se bachne ke liye ans ko object form mein store kraunga
    // const ans = ["Sunil Gavaskar" , "11" , "Sachin Tendulkar" , "4" , "Ab Devilliers"];

    const ans ={
        q1:"Sunil Gavaskar",
        q2:"11",
        q3:"Sachin Tendulkar",
        q4:"4",
        q5:"Ab Devilliers"
    }

    // console.log(ans);

    const data = new FormData(form);
    // data.values() ko array mein isiliye convert kiya gya h kyunki data.values jo h woh ek iterator h uspar iterate krne k liye array mein convert krdiya gya h yaa isko for-of loop se bhi iterate kiya jaa sakta h.
    // const values = Array.from(data.values());
    // console.log(values);
    


    let number = 0 ;

    // form mein jo value select kiya h user ne ; woh ans[key] matlab ans object ke andar uss key se compare ho rhi h 
    // ex:- q5:ab devilliers h aur meine ab devilliers hi sirf select kiya h baaki sab skip kr diya h toh yha array jaisa problem nahi aayega (line7) , yha
    //  ab deviiliers === ans[q5] hoga kyunki 'key' woh hoga jo selected value ka key hoga jaise yha abdeviiliers value h data.entries ka toh key hoga q5 for-of loop dekhne par samajh aarha h [q5,ab deviiliers] data.entries mein select kiya h user ne ; ab (ab devilliers === ans[q5]) aur dono same h toh number++ ho jaayega.
    for(let [key,value] of data.entries()){
        if(value===ans[key]){
            number++;
        }
    }

    // values.length mat lena uske badle ans.length lena kyunki agar humne 5 mein se sirf 3 answer hi diya h toh values.length 3 dikhayega jabki 5 question h 5 baar loop chalana h .
    // for(let i = 0 ; i<ans.length ;i++ ){
    //     if(values[i]===ans1[i]){

    //         number++;
            
    //     }
    // }

    
    const answer = document.getElementById("answer");
     answer.innerHTML = `Result : ${number} is out of 5`;



})