let form = document.forms[0];
let data;
// fetchWeather data

function fecthData(cityName) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "14469e0a3dmshbdffb26631da8cap1cf0bejsn08b48a710fab",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  fetch(`https://open-weather13.p.rapidapi.com/city/${cityName}`, options)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      data = response;

      document.querySelector(".city-name span").textContent = data.name;
      let ems = document.querySelectorAll(".city-info em");
      ems[0].textContent = `Temperature ${(data.main.temp - 32) * (5 / 9)} °C`;
      ems[1].textContent = `Pression ${data.main.pressure} bars`;
      ems[2].textContent = `humidite ${data.main.humidity} %`;
    })
    .catch((err) => console.error(err));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = form.elements["search"];
  if (input.value.trim() !== "") {
    fecthData(input.value);
    console.log(data);
  }
});

/* 
{coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}base: "stations"clouds: all: 0[[Prototype]]: Objectcod: 200coord: lat: 35.5711lon: -5.3724[[Prototype]]: Objectdt: 1671478750id: 2528910main: feels_like: 57.33humidity: 82pressure: 1026temp: 57.97temp_max: 57.97temp_min: 57.97[[Prototype]]: Objectname: "Tétouan"sys: country: "MA"id: 2415sunrise: 1671434761sunset: 1671469862type: 1[[Prototype]]: Objecttimezone: 3600visibility: 10000weather: Array(1)0: {id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}length: 1[[Prototype]]: Array(0)wind: deg: 350speed: 5.75[[Prototype]]: Object[[Prototype]]: Object

*/
