# Weather App

A modern, responsive weather application that provides real-time weather information using the OpenWeather API. The app features a clean, intuitive interface with dynamic backgrounds that change based on weather conditions.

## Features

- Real-time weather data display
- Location-based weather detection
- Search weather by city name
- Temperature toggle between Celsius and Fahrenheit
- Dynamic backgrounds based on weather conditions
- Responsive design for all devices
- Humidity and wind speed information
- Weather condition icons

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API
- Font Awesome Icons
- Google Fonts (Poppins)

## Setup Instructions

1. Clone the repository
2. CWhere to Store the API Key?
3. Go to Vercel Dashboard
4. Open your project
5. Navigate to Settings → Environment Variables
6. Click "Add a new variable"
    Key: WEATHER_API_KEY
    Value:(Replace with your actual API key)
7. Environment: Select "Production" and "Development"
8. Click Save and Redeploy your project.

## API Integration

The app uses the OpenWeather API to fetch weather data. The API key is securely stored server-side and accessed through an API endpoint to prevent exposure in the client-side code.

### API Endpoints Used

- Current weather by city name: `api.openweathermap.org/data/2.5/weather?q={city}&units=metric`
- Current weather by coordinates: `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric`

## Features in Detail

### Location Detection
- Users can get weather information for their current location using the browser's geolocation API
- Requires user permission for location access

### Weather Display
- Temperature in Celsius/Fahrenheit
- Weather description
- City name and country
- Humidity percentage
- Wind speed in meters per second
- Weather condition icon

### Dynamic Backgrounds
The application features dynamic backgrounds that change based on weather conditions:
- Clear sky
- Cloudy
- Rain
- Snow
- Thunderstorm
- Mist/Fog

## Browser Support

The application is compatible with modern browsers that support:
- ES6+ JavaScript
- Geolocation API
- Fetch API
- CSS Grid and Flexbox

## Security Considerations

- API key is stored server-side
- HTTPS recommended for deployment
- Input sanitization for city search
- Error handling for API failures

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.