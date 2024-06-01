const weatherContainer = document.querySelector("#weather");

const API_KEY = "de3682cff22d47e078950f68509e4f4d";

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city = weatherContainer.querySelector("span:nth-child(2)");
        weather = weatherContainer.querySelector("span:nth-child(3)");
        temperature = weatherContainer.querySelector("span:nth-child(4)");
        windDirection = weatherContainer.querySelector("span:nth-child(5)");
        windSpeed = weatherContainer.querySelector("span:nth-child(6)");
        sunRise = weatherContainer.querySelector("span:nth-child(7)");
        sunSet = weatherContainer.querySelector("span:last-child");

        city.innerHTML = city.innerHTML + data.name;
        weather.innerHTML = weather.innerHTML + data.weather[0].main;
        temperature.innerHTML = `${temperature.innerHTML}${
          Math.round(data.main.temp * 10, 1) / 10
        }°`;
        windDirection.innerHTML =
          windDirection.innerHTML + `${data.wind.deg}deg`;
        windSpeed.innerHTML =
          windSpeed.innerHTML +
          `${Math.round(data.wind.speed * 10, 1) / 10}m/s`;

        sunRise.innerHTML =
          sunRise.innerHTML +
          "일출:" +
          new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        sunSet.innerHTML =
          sunSet.innerHTML +
          "일몰:" +
          new Date(data.sys.sunset * 1000).toLocaleTimeString();
      });
  },
  (err) => {
    alert(`${err.message}. Please gran location permission.`);
  }
);
