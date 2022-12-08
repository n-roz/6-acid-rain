// var APIkey = "5e0fc062533663404b1acd91a8cbb20b";
// // https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys

// var cityInputEl = $('#city-input');
// var searchBtn = $('#search-button');
// var currentCity;

// function getCoordinates () {
//     // https://openweathermap.org/forecast5#name5
//     var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=imperial&appid=${APIkey}`;
//     var storedCities = JSON.parse(localStorage.getItem("cities")) || [];

//     // https://api.openweathermap.org/data/2.5/weather?q=$London&units=metric&appid=5e0fc062533663404b1acd91a8cbb20b

//     fetch(requestUrl)
//       .then(function (response) {
//           return response.json();
//       })
//       .then(function(data) {
//         console.log(data);

//         var cityInfo = {
//             city: currentCity,
//             lon: data.coord.lon,
//             lat: data.coord.lon
//         }

//         storedCities.push(cityInfo);
//         localStorage.setItem("cities", JSON.stringify(storedCities));
//       })
//     return;
// }

// function handleCityFormSubmit (event) {
//     event.preventDefault();

//     city = cityInputEl.val().trim();
//     console.log(city);
//     cityInputEl.textContent = '';
//     currentCity = cityInputEl.val().trim();
//     console.log(currentCity);

//     getCoordinates();
// }

// searchBtn.on("click", handleCityFormSubmit);

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=5e0fc062533663404b1acd91a8cbb20b')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
