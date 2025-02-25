# Environment Variables Setup

## Local Development

1. Create a `.env` file in the root directory of your project
2. Add your OpenWeather API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```
3. Install the required dependencies:
   ```bash
   npm install dotenv
   ```

## Production Deployment (GitHub Pages)

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add a new secret:
   - Name: `OPENWEATHER_API_KEY`
   - Value: Your actual API key

## Security Notes

- Never commit the `.env` file to your repository
- The `.env` file is already included in `.gitignore`
- For production, use GitHub Secrets to manage your environment variables
- Always use environment variables for sensitive data like API keys