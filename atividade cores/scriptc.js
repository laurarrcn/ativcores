function convertTemperature() {

    var temperatureInput = document.getElementById("temperature").value;
    
    if (temperatureInput) {
     
      var temperatureCelsius = parseFloat(temperatureInput);
      
      var temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
  
      var temperatureKelvin = temperatureCelsius + 273.15;
  
      var result = document.getElementById("result");
      result.innerHTML =
        "Temperatura em Celsius: " +
        temperatureCelsius.toFixed(2) +
        "°C<br />" +
        "Temperatura em Fahrenheit: " +
        temperatureFahrenheit.toFixed(2) +
        "°F<br />" +
        "Temperatura em Kelvin: " +
        temperatureKelvin.toFixed(2) +
        "K";
  
      var body = document.getElementsByTagName("body")[0];
  
      if (temperatureCelsius > 70) {
        body.style.backgroundColor = "rgb(115, 6, 6)";
      } else if (temperatureCelsius >= 1 && temperatureCelsius <= 30) {
        body.style.backgroundColor = "rgb(6, 115, 59)";
      } else {
        body.style.backgroundColor = "rgb(25, 126, 172)";
      }
    }
  }
