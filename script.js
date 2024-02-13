function displaySalutation(timeZone){
    let date = new Date();
    let options = {
        hour: 'numeric',
        hour12: false,
        timeZone: timeZone
    };

    let d= date.toLocaleTimeString("en-US", options);
    let hr = parseInt(d, 10);
    
    if(hr<12){
        salutation.innerHTML="Good Morning"
    }
    else if(hr>12 && hr<17){
        salutation.innerHTML="Good Afternoon"
    }
    else{
        salutation.innerHTML="Good Evening"

    }
}//this function takes argument i.e. timeZone from api2 , usine toLocaleTimeString and giving an object i.e. options as parameters which gives only hours string of that place in 24hr , zone specific
//then converted that hr in int using parseint with base 10 means decimal
//according to the time displayed the salutaions



function timebycord(timeZone) {
    
    // Create a new Date object
    function updateformatedtime(timeZone) {
        let date = new Date();
        document.getElementById("time").innerHTML = date.toLocaleTimeString("en-US", { timeZone: `${timeZone}` });
        document.getElementById("date").innerHTML = date.toDateString("en-US", { timeZone: `${timeZone}` });
        // Call the function again on the next animation frame
        requestAnimationFrame(function () {
            updateformatedtime(timeZone);
        });
    }
    
    // Initial call to update the time
    updateformatedtime(timeZone);
}
//this function display date and time according to the timezone
//gives time , zone specific
//earllier using setInterval(updateFormattedTime, 1000); it gives a glich as it updates every secound and 1st we get normal time then it is converted which gives a delay therefore used requestAnimationFrame(updateformatedtime); this RequestAnimationFrame() is an animation method in JavaScript that tells the browser to call a function and update the animation before the next repaint.

function convertTimestampToTime(timestamp) {
    // Step 1: Create a new Date object using the provided timestamp
    var date = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    
    // Step 2: Extract the time components
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    // Step 3: Format the time with leading zeros if needed
    var formattedHours = (hours < 10 ? '0' : '') + hours;
    var formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    
    // Step 4: Return the formatted time
    return formattedHours + ':' + formattedMinutes;
}
//this function converts the milliseconds of the sunrise and sunset time given by api1 to hh:mm format 




//api1
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }    
};    
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';

//api1 function
const getWeather = (city)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cityName.innerHTML = city
        Temp.innerHTML = response.temp + "°"
        Cloud_pct.innerHTML = response.cloud_pct
        Feels_like.innerHTML = response.feels_like 
        Humidity.innerHTML = response.humidity
        Humid.innerHTML = response.humidity
        Min_temp.innerHTML = response.min_temp
        Max_temp.innerHTML = response.max_temp
        Wind_speed.innerHTML = response.wind_speed
        speed.innerHTML = response.wind_speed
        Wind_degrees.innerHTML = response.wind_degrees
        Sunrise.innerHTML = convertTimestampToTime(response.sunrise)
        Sunset.innerHTML = convertTimestampToTime(response.sunset)
    })
    .catch(err => console.error(err));
}//desplaying specific info fetched by the api1






//api 2
const options2 = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
}
const url2 = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=Delhi&language=en';
//api2 function
const getweather2 = (city)=>{
    fetch( 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text='+ city + '&language=en', options2)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        lat.innerHTML=response[0].lat;
        lon.innerHTML=response[0].lon;
        timebycord(response[0].timezone);
        displaySalutation(response[0].timezone);
    })
    .catch(err => console.error(err));
};//desplaying specific info fetched by the api1







function getLocation() {
    var locationInput = document.getElementById("locationInput");
    
    getWeather(locationInput.value.toUpperCase());
    getweather2(locationInput.value.toUpperCase());
    
} // Get the input location function
//this function is called whenever the user click the submit button 
//it takes the input from the text box which is the location
//the this call both api1,api2 to fetch the info


getWeather("DELHI");
getweather2("DELHI");
//api fetch by default





//TRIALS

//display salutation according to time , change this according to searched place time not your time // have to update this function (remarks)

// function updateTime() {
//     let currentDate = new Date();
//     document.getElementById("time").innerHTML = currentDate.toLocaleTimeString();
// } //function to update time every second

// // Update time every second (1000 milliseconds)
// setInterval(updateTime, 1000);