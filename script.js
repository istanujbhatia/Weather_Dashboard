// function displaySalutation(timeZone){
//     let date = new Date();
//     let options = {
//         hour: 'numeric',
//         hour12: false,
//         timeZone: timeZone
//     };

//     let d= date.toLocaleTimeString("en-US", options);
//     let hr = parseInt(d, 10);
    
//     if(hr<12){
//         salutation.innerHTML="Good Morning"
//     }
//     else if(hr>12 && hr<17){
//         salutation.innerHTML="Good Afternoon"
//     }
//     else{
//         salutation.innerHTML="Good Evening"

//     }
// }//this function takes argument i.e. timeZone from api2 , usine toLocaleTimeString and giving an object i.e. options as parameters which gives only hours string of that place in 24hr , zone specific
//then converted that hr in int using parseint with base 10 means decimal
//according to the time displayed the salutaions



// function timebycord(timeZone) {
    
//     // Create a new Date object
//     function updateformatedtime(timeZone) {
//         let date = new Date();
//         document.getElementById("time").innerHTML = date.toLocaleTimeString("en-US", { timeZone: `${timeZone}` });
//         document.getElementById("date").innerHTML = date.toDateString("en-US", { timeZone: `${timeZone}` });
//         // Call the function again on the next animation frame
//         requestAnimationFrame(function () {
//             updateformatedtime(timeZone);
//         });
//     }
    
//     // Initial call to update the time
//     updateformatedtime(timeZone);
// }
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
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




// function convertTo24HrFormat(utcTime, timezoneOffset) {
//     // Parse the input UTC time string to get hours and minutes
//     const [utcHours, utcMinutes] = utcTime.split(':').map(Number);
    
//     // Convert the timezone offset from seconds to hours
//     const offsetHours = timezoneOffset / 3600;
    
//     // Calculate the local time hours and minutes
//     let localHours = utcHours + offsetHours;
//     let localMinutes = utcMinutes;

//     // Handle the cases where local hours are outside the range [0, 23]
//     if (localHours >= 24) {
//         localHours -= 24;
//     } else if (localHours < 0) {
//         localHours += 24;
//     }
    
//     // Format the hours and minutes to always be two digits
//     const formattedHours = localHours.toString().padStart(2, '0');
//     const formattedMinutes = localMinutes.toString().padStart(2, '0');

//     // Return the local time in 24-hour format
//     return `${formattedHours}:${formattedMinutes}`;
// }

// Example usage:
 // Timezone offset in seconds (e.g., -18000 for UTC-5)





// //api1 function
let getWeather = async function (city){
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    try {
        const result = await fetch(url, options);
        const response = await result.json();
        console.log(response);
        cityName.innerHTML = city
        Temp.innerHTML = fahrenheitToCelsius(response.main.temp).toFixed() + "°"
        Cloud_pct.innerHTML = response.clouds.all
        Feels_like.innerHTML = fahrenheitToCelsius(response.main.feels_like).toFixed()
        Humidity.innerHTML = response.main.humidity
        Humid.innerHTML = response.main.humidity
        Min_temp.innerHTML = response.main.temp_min
        Max_temp.innerHTML = response.main.temp_max
        Wind_speed.innerHTML = response.wind.speed
        speed.innerHTML = response.wind.speed
        Wind_degrees.innerHTML = response.wind.deg
        Sunrise.innerHTML = convertTimestampToTime(response.sys.sunrise)
        Sunset.innerHTML = convertTimestampToTime(response.sys.sunset)
        lat.innerHTML=response.coord.lat;
        lon.innerHTML=response.coord.lon;
        // const utcTime = "12:00"; // UTC time in HH:MM format
        // const timezoneOffset = response.sys.timezone
        // const localTime = convertTo24HrFormat(utcTime, timezoneOffset);

        // timebycord(response.timezone);
        // displaySalutation(response.timezone);


    } catch (error) {
        console.error(error);
    }
}
//api 1


function getLocation() {
    var locationInput = document.getElementById("locationInput");
    
    getWeather(locationInput.value.toUpperCase());
    
} // Get the input location function
//this function is called whenever the user click the submit button 
//it takes the input from the text box which is the location
//the this call both api1,api2 to fetch the info


getWeather("DELHI");

//api fetch by default