let cel, fah;

function celfah()
{
    console.log("Convert Celsius to Fahrenheit")
    console.log("Celsius: " + cel);

    let fahrenheit;
    fahrenheit = (9.0 / 5.0) * cel + 32;
    return fahrenheit;
}

console.log("Fahrenheit: " + celfah(cel = 38.00));

////////////////////////

function fahcel()
{
    console.log("Convert Fahrenheit to Celsius")
    console.log("Fahrenheit: " + fah);

    let celsius;
    celsius = (5.0 / 9.0) * (fah - 32);
    return celsius;
}

console.log("Celsius: " + fahcel(fah = 100.40));

////////////////////////

function fahkel()
{
    console.log("Convert Fahrenheit to Kelvin")
    console.log("Fahrenheit: " + fah);

    let kelvin;
    kelvin = (fah - 32) * (5.0 / 9.0) + 273.15;
    return kelvin;
}

console.log("Kelvin: " + fahkel(fah = 100.40));