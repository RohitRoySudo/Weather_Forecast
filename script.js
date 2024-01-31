const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const searchBox=document.querySelector("input");
const searchbBtn=document.querySelector("button");
const weatherIcon=document.querySelector(".weather-icon");
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";
const api="&appid=c5cb96c68851453b618ee3c4518cd158&units=metric";

async function checkWeather(cityName){
    const response= await fetch(apiurl+`${cityName}`+api);
    const data=await response.json();
    console.log(data);
    temp.innerHTML=data.main.temp+`°c`;
    city.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+`%`;
    wind.innerHTML=data.wind.speed+`Km/h`;

    if(data.weather[0].main=="Clouds")
    {
         weatherIcon.src="./images/clouds.png";
    }

    else if(data.weather[0].main=="Clear")
    {
         weatherIcon.src="./images/clear.png";
    }
    else if(data.weather[0].main=="drizzle")
    {
         weatherIcon.src="./images/drizzle.png";
    }
    else if(data.weather[0].main=="humidity")
    {
         weatherIcon.src="./images/humidity.png";
    }
    else if(data.weather[0].main=="Mist")
    {
         weatherIcon.src="./images/mist.png";
    }
    else if(data.weather[0].main=="rain")
    {
         weatherIcon.src="./images/rain.png";
    }
    else if(data.weather[0].main=="Snow")
    {
         weatherIcon.src="./images/snow.png";
    }
    else if(data.weather[0].main=="Wind")
    {
         weatherIcon.src="./images/wind.png"
    }
   

}


searchbBtn.addEventListener("click",()=>{

    checkWeather(searchBox.value)
    
})
