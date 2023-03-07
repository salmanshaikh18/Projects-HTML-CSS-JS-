/* 18. Change Text on Button click.
Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click. */

// Get references to the heading and button elements
const heading = document.getElementById('h1');
const btn = document.getElementById('btn');

// Add a click event listener to the button
btn.addEventListener("click", () => {
    // Toggle the text of the heading between "The most affordable learning platform" and "PW Skills"
    if (heading.innerText == "PW Skills") {
        heading.innerText = "The most affordable learning platform."
    }
    else {
        heading.innerText = "PW Skills"
    }
} )
