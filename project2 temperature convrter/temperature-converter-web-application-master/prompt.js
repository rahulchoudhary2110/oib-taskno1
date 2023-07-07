function getCelsiusToFahrenheit() {
    let cel;
    let celsius = window.prompt("Celsius: ");

    if (celsius !== null || celsius !== NaN || celsius !== "") {
        cel = "Hello " + celsius;
    }
    document.getElementById("insertCelsius").innerHTML = celsius;

    let computeFahrenheit = (9.0 / 5.0) * celsius + 32;
    document.getElementById("insertFahrenheit").innerHTML = computeFahrenheit.toFixed(2);
}

function getFahrenheitToCelsius() {
    let fah;
    let fahrenheit = window.prompt("Fahrenheit: ");

    if (fahrenheit !== null || fahrenheit !== NaN || fahrenheit !== "") {
        fah = "Hello " + fahrenheit;
    }
    document.getElementById("insertFahrenheit").innerHTML = fahrenheit;

    let computeCelsius = (5.0 / 9.0) * (fahrenheit - 32);
    document.getElementById("insertCelsius").innerHTML = computeCelsius.toFixed(2);
}

function getFahrenheitToKelvin() {
    let fah;
    let fahrenheit = window.prompt("Fahrenheit: ");

    if (fahrenheit !== null || fahrenheit !== NaN || fahrenheit !== "") {
        fah = "Hello " + fahrenheit;
    }
    document.getElementById("insertFahrenheit").innerHTML = fahrenheit;

    let computeKelvin = (fahrenheit - 32) * (5.0 / 9.0) + 273.15;
    document.getElementById("insertKelvin").innerHTML = computeKelvin.toFixed(2);
}