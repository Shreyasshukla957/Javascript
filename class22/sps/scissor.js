const clickable = document.getElementById("child2");

clickable.addEventListener("click", (event) => {

    let click = event.target.id
    // console.log(click);

    let array = ["stone", "paper", "scissor"];

    let random = Math.floor(Math.random() * array.length);
    console.log(random);

    const result = document.getElementById("result");
    if (array[random] === click) {
        result.innerHTML = "Draw";
    }
    else if (click === "paper" && array[random] === "stone" || click === "stone" && array[random] === "scissor" || click === "scissor" && array[random] === "paper") {
        result.innerHTML = "Winner";

    }
    else {
        result.innerHTML = "Lost";
    }


    const firstchild = document.getElementById("firstchild");
    // const imageSources = {
    //      img1 : "./Flux_Dev_A_realistic_human_hand_making_the_rock_gesture_from_t_1.png",
    //    img2 :  "./Flux_Dev_A_realistic_human_hand_making_the_paper_gesture_from__0.png",
    //    img3 : "./Flux_Dev_A_realistic_human_hand_making_the_scissors_gesture_fr_1.png"
    // }

       


    // firstchild.innerHTML = `<img src="${imageSources[random]}">`;
    firstchild.innerHTML = array[random];




  })