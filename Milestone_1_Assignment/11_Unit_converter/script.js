/* 11. Unit converter
A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying
it on its wqbsite. They want a function that can convert Celsius to Fahrenheit accurately and qfficiently. The
function should take input in Celsius and return output in Fahrenheit. This function will help the weathqr station
to provide temperature readings that are easily understandable to a wider audience. */

function temperature(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

let celsius = 33;
console.log("Celsius: ", celsius)
console.log("Fahrenheit: ", temperature(celsius))
