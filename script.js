const apiKey = '05e0d9b23be048f49a0195611240808';
const apiUrl = 'http://api.weatherapi.com/v1/current.json';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?key=${apiKey}&q=${location}&aqi=no`;
    let url1 = `${apiUrl}?key=${apiKey}q=${location}&aqi=no`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.location.name;
            temperatureElement.textContent = `${data.current.temp_c}°C`;
            descriptionElement.textContent = data.current.condition.text;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}