const apikey = "9eebd0002e9abb13c8fabdf2d6118355";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=tehran";

async function checkweather() {
    const response = await fetch(apiurl + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
}

checkweather()