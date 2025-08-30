
const apikey = "18d5134b1dd9eb38705a266aef091a73";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon")

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiurl+ city +`&appid=${apikey}`);
    if(response.status===404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display ="none" ;
    }
    else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "./assets/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./assets/clear.png";
    }
    else if (data.weather[0].main=="dizzle"){
        weatherIcon.src="./assets/drizzle.png";

    }
    else if (data.weather[0].main=="Rain"){
        weatherIcon.src="./assets/rain.png";
    }
     else if (data.weather[0].main=="Mist"){
        weatherIcon.src="./assets/mist.png";
    }
     else if (data.weather[0].main=="Snow"){
        weatherIcon.src="./assets/snow.png";
    }
    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display = "none";
  
}
}
searchBtn.addEventListener('click',()=>{
checkWeather(searchBox.value);
})

