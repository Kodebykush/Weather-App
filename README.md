# Weather App

A modern weather application that displays current weather conditions for any city worldwide. Built with HTML, CSS, and JavaScript, utilizing the OpenWeatherMap API.

## Features

- Search weather by city name
- Get weather for current location
- Toggle between Celsius and Fahrenheit
- Dynamic weather-based backgrounds
- Displays temperature, humidity, wind speed, and weather description
- Responsive design

## Getting Started

### Prerequisites

- A web browser
- An OpenWeatherMap API key

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YourUsername/Weather-App.git
   cd Weather-App
   ```

2. **Set Up Your API Key**:
   - Sign up at [OpenWeather](https://openweathermap.org/api) and obtain your API key
   - Create a file named `config.js` in the root directory
   - Add your API key:
     ```javascript
     const config = {
         apiKey: "your_api_key_here"
     };
     ```

## Deployment

### Deploying to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com)
   - Create a new repository
   - Name it "Weather-App" or your preferred name

2. **Configure API Key for Production**:
   - Never commit your actual `config.js` file to GitHub
   - For production, create a new branch called `gh-pages`
   - In this branch, create a `config.js` file with your API key
   - Add this file to `.gitignore` in your main branch

3. **Push Your Code**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YourUsername/Weather-App.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository's Settings
   - Scroll to the "GitHub Pages" section
   - Select the `gh-pages` branch as the source
   - Click Save

5. **Access Your Deployed App**:
   - Your app will be available at: `https://YourUsername.github.io/Weather-App`

## Usage

- Enter a city name in the search bar and click "Search"
- Click the location icon to get weather for your current location
- Toggle between Celsius and Fahrenheit using the temperature switch button

## Security Note

Never commit your actual API key to GitHub. The `config.js` file is included in `.gitignore` to prevent accidental commits. For production deployment, you'll need to manually add the `config.js` file to your hosting environment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org)
- Icons from [Font Awesome](https://fontawesome.com)
- Background images adapted for different weather conditions
