/* 16. Generate a random number
Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
Use a self-invoking arrow function to generate the random number. This program can be used as a component
in various games or applications that require a random number generator. */


const randomNumber = (() => {
    const minNumber = 1;
    const maxNumber = 100;

    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + (minNumber))
})();

console.log(`The random number between 1 and 100 is: ${randomNumber}`)

