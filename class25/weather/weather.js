const button = document.getElementById("button");

button.addEventListener("click", () => {

    const place = document.getElementById("location").value;
    const info = document.getElementById("weatherInfo");

    const temperature = fetch(`http://api.weatherapi.com/v1/current.json?key=4769651354bf4b32a7a192333251607&q=${place}&aqi=yes`);


    const image = document.getElementById("imgs");

    function internal(data) {
        info.innerHTML = data.current.temp_c;
        // this way we can show image using html tag and data.
        image.innerHTML = `<img src="https:${data.current.condition.icon}" alt="Weather Icon" />`;
    }   

    temperature
        .then((response) => response.json())
        .then((data) => internal(data));
        


})      