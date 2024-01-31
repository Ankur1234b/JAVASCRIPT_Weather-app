const  weatherform=document.querySelector(".weatherform");
const cityInput=document.querySelector(".cityInput");
const card=document.querySelector(".card");
const apikey="b5a971318f01cf3f78868b9d1e37e62c";

weatherform.addEventListener("submit",async event => {
event.preventDefault();
const city=cityInput.value;
if(city){

        const weatherdata=await getweatherdata(city);
        displayweatherinfo(weatherdata);
}

});

async function getweatherdata(city){
const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const response=await fetch(apiurl);
return await response.json();
}

function displayweatherinfo(data){
const{name:city,
        main:{temp,humidity},
        weather:[{description,id}]}=data;

        card.textContent="";
        card.style.display="flex";
        const citydisplay=document.createElement("h1");
        const tempdisplay=document.createElement("p");
        const humiditydisplay=document.createElement("p");
        const descdisplay=document.createElement("p");
        const weatheremoji=document.createElement("p");
        
        citydisplay.textContent=city;
        tempdisplay.textContent=`${temp-273.15}C`;
        humiditydisplay.textContent=`Humidity:${humidity}%`;



        citydisplay.classList.add("cityDisplay");
        tempdisplay.classList.add("tempDisplay");
        humiditydisplay.classList.add("humidityDisplay");

        card.appendChild(citydisplay);
        card.appendChild( tempdisplay);
        card.appendChild( humiditydisplay);
}

function getweatheremoji(weatherid){

}

