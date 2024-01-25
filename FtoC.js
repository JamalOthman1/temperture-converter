function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function createMessage(fahrenheit, celsius) {
    let feel;

    if (celsius < 0) {
        feel = "very cold";
    } else if (celsius >= 0 && celsius < 16) {
        feel = "cold";
    } else if (celsius >= 16 && celsius < 26) {
        feel = "nice";
    } else if (celsius >= 26 && celsius < 36) {
        feel = "warm";
    } else {
        feel = "hot";
    }

    return `The temperature is ${celsius.toFixed(1)}°C (${fahrenheit}°F), which feels ${feel}.`;
}

function rand(limit) {
    return Math.floor(Math.random() * (limit + 1));
}
// Example usage
let fahrenheitTemperature = rand(110); // Random Fahrenheit temperature up to 110
let celsiusTemperature = convertToCelsius(fahrenheitTemperature);
let message = createMessage(fahrenheitTemperature, celsiusTemperature);

console.log(message);
