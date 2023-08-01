# Weather Application

Welcome to the Weather Application! This is a simple weather application built using Next.js and React that allows you to search for weather details of a city. The application fetches weather data from the Weather API and displays the current weather, week forecast, and other weather details.

## Installation

Before running the application, make sure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org) and install it on your system.

## Getting Started

To get the application up and running on your local machine, follow these steps:

1. Clone the repository or download the ZIP file and extract it.

2. Navigate to the project directory in the terminal or command prompt.

3. Install the dependencies by running the following command:

`npm install`


4. Obtain a Weather API key from [WeatherAPI](https://www.weatherapi.com/) (it's free) and replace `"YOUR_WEATHER_API_KEY"` in `pages/api/weather.js` with your actual API key.

## Running the Application

To start the development server and run the application, use the following command:

`npm run dev`


This will start the front-end development server, and you can access the application at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Enter the name of a city in the search box.

2. Press the Enter key or click the search icon to fetch weather data for the entered city.

3. The application will display the current weather, week forecast, and other weather details for the selected city.

## Important Notes

- The Weather API key is directly used in the front-end code (`pages/api/weather.js`). While this approach works for smaller personal projects, it is not recommended for production applications due to security risks. In a production environment, it's advisable to use a back-end server to handle API calls securely.

- The provided application is a front-end application with a simple API route to fetch weather data. It does not have a traditional back-end server to handle API requests.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
