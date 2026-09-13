# Fetch Location

A small browser demo that requests the user's location and fetches current weather data for those coordinates using the WeatherAPI service.

## How It Works

1. Click **Fetch location**.
2. Allow location access when prompted by the browser.
3. The app sends the latitude and longitude to WeatherAPI.
4. The returned weather data is logged in the browser console.

## Run Locally

Because browsers may block geolocation on pages opened directly from the file system, serve the project from a local web server.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

You can also use a VS Code live-server extension or another static web server.

## Requirements

- A modern web browser with geolocation support
- Location permission enabled for the page
- A valid WeatherAPI API key
- An internet connection

## Configuration

The WeatherAPI request is currently defined in `script.js`. Replace the API key in the request URL with your own key before using the project:

```js
const promise = await fetch(
  `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${latitude},${longitude}&aqi=yes`
);
```

For a real application, do not expose an API key in client-side JavaScript. Use a server-side endpoint or proxy to keep the key private. The request should also use `https` when the app is served over HTTPS.

## Viewing Results

Open the browser's developer tools and check the **Console** tab to view the location request result or any error messages.
