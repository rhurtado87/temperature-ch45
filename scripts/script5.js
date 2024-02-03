function convertTemperature() {
    // Get input values
    let temperature = parseFloat(document.getElementById("temperatureInput").value);
            let scale = document.querySelector('input[name="scale"]:checked').value;

            let convertedTemperature;

            if (scale === "C") {
                // Convert Celsius to Fahrenheit
                convertedTemperature = (temperature * 9/5) + 32;
                document.getElementById("result").innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " °F";
            } else if (scale === "F") {
                // Convert Fahrenheit to Celsius
                convertedTemperature = (temperature - 32) * 5/9;
                document.getElementById("result").innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " °C";
            } else {
                // Invalid scale
                console.error("Invalid temperature scale. Use 'C' for Celsius or 'F' for Fahrenheit.");
                return;
            }
            let celsiusTemperature = 30;
            let convertedToFahrenheit = convertTemperature(celsiusTemperature, 'C');
                    console.log(`${celsiusTemperature} Celsius is ${convertedToFahrenheit} Fahrenheit.`);

            let fahrenheitTemperature = 86;
            let convertedToCelsius = convertTemperature(fahrenheitTemperature, 'F');
                    console.log(`${fahrenheitTemperature} Fahrenheit is ${convertedToCelsius} Celsius.`);

    //thermometer marker position (had help)
    let markerPosition = Math.min(100, Math.max(0, (convertedTemperature - 32) * (100 / (212 - 32))));
            document.getElementById("temperatureMarker").style.bottom = markerPosition + "%";
            // Store the current converted temperature for future reference
            lastConvertedTemperature = convertedTemperature;
            // Change marker color when the temperature reaches the maximum
            if (convertedTemperature >= 212) {
                document.getElementById("temperatureMarker").style.backgroundColor = "orange";
            } else {
                document.getElementById("temperatureMarker").style.backgroundColor = "red";
            }
        }