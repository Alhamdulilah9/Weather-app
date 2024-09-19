
document.getElementById('get-weather-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  if (city === "") {
      alert("Please enter a city name");
      return;
  }

  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('City not found');
          }
          return response.json();
      })
      .then(data => {
          const location = data.name;
          const temperature = data.main.temp;
          const description = data.weather[0].description;

          document.getElementById('location').textContent = `Location: ${location}`;
          document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
          document.getElementById('description').textContent = `Description: ${description}`;
      })
      .catch(error => {
          alert(error.message);
      });
});
