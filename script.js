
    // let d = new Date();
    // document.getElementById("date").innerHTML = d.toDateString(); //display date
    // if(d.getHours()<12){
    //     salutation.innerHTML="Good Morning"
    // }
    // else if(d.getHours()>12 && d.getHours()<17){
    //     salutation.innerHTML="Good Afternoon"
    // }
    // else{
    //     salutation.innerHTML="Good Evening"

    // }//display salutation according to time             //change this according to searched place time not your time // have to update this function (remarks)

// function updateTime() {
//     let currentDate = new Date();
//     document.getElementById("time").innerHTML = currentDate.toLocaleTimeString();
// } //function to update time every second

// // Update time every second (1000 milliseconds)
// setInterval(updateTime, 1000);


function timebycord(timeZone){
    // Create a new Date object
    function updateformatedtime()
    {
        const now = new Date();
        // Format the date with the specified time zone
        const formattedTime = new Intl.DateTimeFormat('en-US', 
        {
            timeZone: timeZone,
            hour12: false, // Use 24-hour format
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(now);

        document.getElementById("time").innerHTML = formattedTime;
        requestAnimationFrame(updateformatedtime);  
        //earllier using setInterval(updateFormattedTime, 1000); it gives a glich as it updates every secound and 1st we get normal time then it is converted which gives a delay therefore used requestAnimationFrame(updateformatedtime); this RequestAnimationFrame() is an animation method in JavaScript that tells the browser to call a function and update the animation before the next repaint.
    }
    updateformatedtime();
}




const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';

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
    
}








//api 2
const options2 = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
}
const url2 = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=Delhi&language=en';

const getweather2 = (city)=>{
    fetch( 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text='+ city + '&language=en', options2)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        lat.innerHTML=response[0].lat
        lon.innerHTML=response[0].lon
        timebycord(response[0].timezone)
})
.catch(err => console.error(err));
};
function getLocation() {
    var locationInput = document.getElementById("locationInput");

    getWeather(locationInput.value.toUpperCase());
    getweather2(locationInput.value.toUpperCase());
    
}        // Get the input location function

getWeather("DELHI");
getweather2("DELHI")









// const url2 = 'https://open-weather13.p.rapidapi.com/city/russia';
// const options2 = {
// 	method: 'GET',
// 	headers: {
    // 		'X-RapidAPI-Key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
    // 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    // 	}
    // };
    
    
    // const getcoords = ()=>{
        
        //     fetch('https://open-weather13.p.rapidapi.com/city/russia', options2)
        //     .then(response => response.json())
        //     .then(response => {
            //         console.log(response)
            //         lon.innerHTML=response.coords.lon
            //         lat.innerHTML=response.coords.lat
            
            //     })
            //     .catch(err => console.error(err));
            
            // }
            // getcoords("DELHI");    //limit exceeded
            
            
            
            
            
            // document.addEventListener('DOMContentLoaded', function(e) {
            //     // Get the input field
            //     var searchInput = document.getElementById('submit');
            //     // Add an event listener for the input event
            //     searchInput.addEventListener('input', function() {
            //         // Retrieve the value from the input field
            //         e.preventDefault()
            //         getcoords(searchInput.value.toUpperCase())
                    
            //     });
            // });
            
            