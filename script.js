// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'bb609c9c674a5af637bad00670f09684';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherCard = document.getElementById('weathercard');

    if (!city) {
        weatherCard.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        // Extract necessary data points
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const icon = data.weather[0].icon;

        // Update the weather card
        weatherCard.innerHTML = `
            <h2>${cityName}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
            <p>${temperature}°C</p>
            <p>${weatherDescription}</p>
        `;
    } catch (error) {
        weatherCard.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
