Weather Dashboard 

Overview
A simple Weather Dashboard web application that lets users search for and view real-time weather information of any city. The app uses the OpenWeatherMap API to fetch weather data and displays the results in a clean, minimal weather card.

Features
Search weather by city name.

Displays:

City name

Temperature (°C)

Weather description

Weather icon

Error handling for invalid or empty city names.

Clean and minimal UI design.

Project Structure
graphql
Copy
Edit
weather-dashboard/
│
├── wd (1).html   # Main HTML structure
├── wd (1).css    # Styles for layout and design
├── script.js     # JavaScript logic to fetch and display weather data
└── README.md     # Project documentation
Technologies Used
HTML — Structure of the webpage

CSS — Styling and layout

JavaScript — Fetching and updating data dynamically

OpenWeatherMap API — Weather data source

How to Run
Open wd (1).html in a browser.

Enter a city name in the input box.

Click Search to fetch and view the weather details.

API Key
This project uses the OpenWeatherMap API. Replace the apiKey value in script.js with your own API key if needed.

Testing
Valid city name → Displays correct weather data.

Invalid city name → Shows “Error: City not found”.

Empty input → Prompts user to enter a city.
