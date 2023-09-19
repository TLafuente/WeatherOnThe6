// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'https://api.weather.gov';

// Function to fetch weather data
function fetchWeatherData(cityName) {
    const apiUrl = `https://api.weather.gov`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the weather data
            displayCurrentWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to display current weather
function displayCurrentWeather(data) {
    const currentCity = document.getElementById('current-city');
    currentCity.innerHTML = '';

    const cityName = data.name;
    const temperature = data.main.temperature;
    const description = data.weather[0].description;

    const cityElement = document.createElement('h2');
    cityElement.textContent = cityName;
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${description}`;

    currentCity.appendChild(cityElement);
    currentCity.appendChild(temperatureElement);
    currentCity.appendChild(descriptionElement);
}

// Event listener for form submission
const citySearchForm = document.getElementById('city-search-form');
citySearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value.trim();

    if (cityName !== '') {
        fetchWeatherData(cityName);
    }
});