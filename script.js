
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';

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
        Min_temp.innerHTML = response.min_temp
        Max_temp.innerHTML = response.max_temp
        Wind_speed.innerHTML = response.wind_speed
        Wind_degrees.innerHTML = response.wind_degrees
        Sunrise.innerHTML = response.sunrise
        Sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
    
}

document.addEventListener('DOMContentLoaded', function(e) {
    // Get the input field
    var searchInput = document.getElementById('submit');
    // Add an event listener for the input event
    searchInput.addEventListener('input', function() {
        // Retrieve the value from the input field
        e.preventDefault()
        getWeather(searchInput.value);
        
    });
});
getWeather("russia");




// (async () => {
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'f2943f6703mshd9ed180470b0b14p1a35d4jsnf397d668c1ee',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(url, options);
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const result = await response.text();
//       console.log(result);
//     } catch (error) {
//       console.error('Error during fetch:', error.message);
//     }
//   })();


  