/*const userCelsius = prompt("Dame la temperatura en grados celsius");
const GRADOS_KELVIN = parseFloat(userCelsius) + parseFloat(273);
console.log(GRADOS_KELVIN)*/
const KELVIN_FACTOR = 273;
const celsiusTemperature = parseInt(prompt("Introduce una temperatura en Celsius: "));
const kelvinTemperature = celsiusTemperature + KELVIN_FACTOR;
console.log ('La temperatura ${celsiusTemperature}ºC en Kelvin son ${kelvinTemperature}ºK');