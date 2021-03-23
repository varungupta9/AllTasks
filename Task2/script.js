let latitude=0; let lon=0;
const API_KEY = "3f310de674121c8f04c8203f59c4b381";


fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((country) => {
        latitude = country.latlng[0];
        longitude = country.latlng[1];
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => console.log(country.name + ":" + data.main.temp));
    })
  );