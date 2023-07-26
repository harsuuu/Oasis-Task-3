function convertTemperature() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var outputValue = document.getElementById("outputValue");
    
    if (isNaN(inputValue)) {
      outputValue.value = "";
      return;
    }
    
    if (fromUnit === toUnit) {
      outputValue.value = inputValue.toFixed(2);
      return;
    }
    
    var celsius, fahrenheit, kelvin;
    
    // Convert input to celsius
    if (fromUnit === "fahrenheit") {
      celsius = (inputValue - 32) * 5 / 9;
    } else if (fromUnit === "kelvin") {
      celsius = inputValue - 273.15;
    } else {
      celsius = inputValue;
    }
    
    // Convert celsius to output unit
    if (toUnit === "fahrenheit") {
      outputValue.value = (celsius * 9 / 5 + 32).toFixed(2);
    } else if (toUnit === "kelvin") {
      outputValue.value = (celsius + 273.15).toFixed(2);
    } else {
      outputValue.value = celsius.toFixed(2);
    }
  }
  