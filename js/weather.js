const API_KEY = "de3682cff22d47e078950f68509e4f4d";

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const weatherContainer = document.querySelector("#weather");
        city = weatherContainer.querySelector(
          "div:first-child span:first-child"
        );
        weather = weatherContainer.querySelector(
          "div:first-child span:last-child"
        );
        humidity = weatherContainer.querySelector(
          "div:nth-child(2) span:first-child"
        );
        temperature = weatherContainer.querySelector(
          "div:nth-child(2) span:last-child"
        );
        windDirection = weatherContainer.querySelector(
          "div:nth-child(3) span:first-child"
        );
        windSpeed = weatherContainer.querySelector(
          "div:nth-child(3) span:last-child"
        );
        sunRise = weatherContainer.querySelector(
          "div:nth-child(4) span:first-child"
        );
        sunSet = weatherContainer.querySelector(
          "div:nth-child(4) span:last-child"
        );

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;

        humidity.innerText = data.main.humidity;
        temperature.innerText = data.main.temp;

        windDirection.innerText = data.wind.deg;
        windSpeed.innerText = data.wind.speed;

        sunRise.innerText = new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString();
        sunSet.innerText = new Date(
          data.sys.sunset * 1000
        ).toLocaleTimeString();
      });
  },
  (err) => alert(`${err.message}. Please gran location permission.`)
);
