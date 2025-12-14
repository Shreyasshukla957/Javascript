// print ho jaise hi click kre boxes mein
// "0" ke baad "X" print hona chahiye uske liye turn use krenge

// ab logic decide krna h winner kaise decide hoga...
// agar uss particular pattern mein elements align ho gye toh winner decide ho jaayega

let winner = [
    //i = 0    //i = 1   //i = 2
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 4, 8], [2, 4, 6], [0, 3, 6],
    [1, 4, 7], [2, 5, 8]

];


// yha meine galti yeh kardi ki meinn winner[index0]===barray[index0] se compare krne laga jabki winner[index0] ya koi bhi index ho usmein number h aur ismein "O" ,"X" ,"E" mein yeh chahta hu barray ke uss index par same symbol ho "O" ,"X" jo winner ka index par pattern hain
// ex:- winner [i] agar index '1' par h aur uss 'i' ko destructure krdiye toh woh winner [3,4,6] bn jaayega ab iss barray ke same index 
// '3,4,6' par  ye toh  [X,X,X] ya [O,O,O] hoga toh pattern winning pattern bn jaayega par sabko "E" initialize kiya h pehle se hi toh agar uss index "3,4,6" par "E,E,E" rha toh bhi woh samjhega same symbol toh h 3no index par ; lekin hum chahte hain ki "O,O,O" ya "X,X,X" ho uske liye ek aur condition denge ke woh "E" usmein se ek bhi ho toh count naa ho sirf "O,O,O" ya "X,X,X" wala hi count ho
function checkwinner() {
    for (let [index0, index1, index2] of winner) {
        if (barray[index0] != "E" && barray[index0] === barray[index1] && barray[index1] === barray[index2]) {
            return 1;
        }



    }

    return 0;
}

// 9 size ka array bna diya h uske andar "E" har index mein daal diya h
let barray = new Array(9).fill("E");

let turn = "O";
let totalturn = 0;

function tic(event) {
    // console.log(event.target.id);

    const element = event.target;

    // yeh isiliye kiya ki "O" , "X" usi par likha jaayega jis index par "E" warna rewrite ho jaa rha tha ek baar "O" likha tha ex:- k liye index 2 par wapas uske upar "E" rewrite ho jaarha tha ab iss if condition se usi k upar likhayega jiske upar sirf "E" hoga
    if (barray[element.id] === "E") {

        totalturn++;
        if (turn === "O") {
            element.innerHTML = "O";
            barray[element.id] = "O";
            if (checkwinner() == 1) {
                document.getElementById("winningMessage").innerHTML = "Winner is O";
                boards.removeEventListener("click", tic);


            };

            turn = "X";
        }


        else {
            element.innerHTML = "X";
            barray[element.id] = "X";
            if (checkwinner() == 1) {
                document.getElementById("winningMessage").innerHTML = "Winner is X";
                boards.removeEventListener("click", tic);


            };
            turn = "O";

        }


        if (totalturn === 9 && checkwinner()!= 1) {
            document.getElementById("winningMessage").innerHTML = "Match Draw";
        }


    }


}

const boards = document.querySelector(".board");
boards.addEventListener("click", tic)

const restart = document.getElementById("restartButton");
restart.addEventListener("click", (event) => {
    let cell = document.getElementsByClassName("cell");
    Array.from(cell);
    for (let i = 0; i < 9; i++) {
        cell[i].innerHTML = "";



    }

    // yeh sab reset krna padega backend mein tabhi wapas sab reset hoga warna screen par toh lagega reset ho gya par backend mein data sab rhega
    turn = "O";
    totalturn = 0;
    barray = new Array(9).fill("E");
    document.getElementById("winningMessage").innerHTML = "";

    boards.removeEventListener("click", tic);
    boards.addEventListener("click", tic);






})



