const apiKey = config.apiKey; // Replace the hardcoded API key with the one from config
const weatherInfo = document.getElementById('weather-info');
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const tempToggleBtn = document.getElementById('temp-toggle');
const locationBtn = document.getElementById('location-btn');

let currentTemp = 0;
let isCelsius = true;

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to update temperature display
function updateTempDisplay() {
    const tempElement = document.getElementById('temp');
    const temp = isCelsius ? currentTemp : celsiusToFahrenheit(currentTemp);
    const unit = isCelsius ? '°C' : '°F';
    tempElement.textContent = `${Math.round(temp)}${unit}`;
    tempToggleBtn.textContent = `Switch to ${isCelsius ? '°F' : '°C'}`;
}

// Function to get weather by coordinates
async function getWeatherByCoords(lat, lon) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        console.log('Fetching from URL:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(`Error: ${errorData.message || 'Location not found'}`);
        }
        
        const data = await response.json();
        console.log('Weather data:', data);
        updateWeatherInfo(data);
        setWeatherBackground(data.weather[0].main);
    } catch (error) {
        console.error('Full error:', error);
        alert(error.message);
        weatherInfo.classList.remove('active');
        removeWeatherClasses();
    }
}

// Function to get user's location
function getUserLocation() {
    if (navigator.geolocation) {
        locationBtn.style.cursor = 'wait';
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByCoords(latitude, longitude);
                locationBtn.style.cursor = 'pointer';
            },
            (error) => {
                console.error('Geolocation error:', error);
                alert('Unable to get your location. Please allow location access or enter a city name.');
                locationBtn.style.cursor = 'pointer';
            }
        );
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

// Function to remove all weather classes from body
function removeWeatherClasses() {
    document.body.classList.remove('clear', 'clouds', 'rain', 'snow', 'thunderstorm', 'mist');
}

// Function to set background based on weather
function setWeatherBackground(weatherMain) {
    removeWeatherClasses();
    
    const weatherType = weatherMain.toLowerCase();
    switch (weatherType) {
        case 'clear':
            document.body.classList.add('clear');
            break;
        case 'clouds':
            document.body.classList.add('clouds');
            break;
        case 'rain':
        case 'drizzle':
            document.body.classList.add('rain');
            break;
        case 'snow':
            document.body.classList.add('snow');
            break;
        case 'thunderstorm':
            document.body.classList.add('thunderstorm');
            break;
        case 'mist':
        case 'fog':
        case 'haze':
            document.body.classList.add('mist');
            break;
        default:
            // Default gradient background (no class added)
            break;
    }
}

async function getWeatherData(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        console.log('Fetching from URL:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(`Error: ${errorData.message || 'City not found'}`);
        }
        
        const data = await response.json();
        console.log('Weather data:', data);
        updateWeatherInfo(data);
        setWeatherBackground(data.weather[0].main);
    } catch (error) {
        console.error('Full error:', error);
        alert(error.message);
        weatherInfo.classList.remove('active');
        removeWeatherClasses();
    }
}

function updateWeatherInfo(data) {
    const weatherDesc = document.getElementById('weather-desc');
    const cityName = document.getElementById('city-name');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const weatherIcon = document.getElementById('weather-icon');

    // Store current temperature and update display
    currentTemp = data.main.temp;
    updateTempDisplay();

    weatherDesc.textContent = data.weather[0].description.charAt(0).toUpperCase() + 
                            data.weather[0].description.slice(1);
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
    
    // Update weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    // Show the weather info container
    weatherInfo.classList.add('active');
}

// Event listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    }
});

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeatherData(city);
        }
    }
});

// Temperature toggle event listener
tempToggleBtn.addEventListener('click', () => {
    isCelsius = !isCelsius;
    updateTempDisplay();
});

// Location button event listener
locationBtn.addEventListener('click', getUserLocation); 