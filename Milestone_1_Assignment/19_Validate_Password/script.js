/* 19. Validate Password
You are building a login form for a website and need to validate user input using JavaScript. The form has two
input fields: email and password, and a submit button.
Your task is to implement JavaScript code that validates the email and password input fields. The email field
should contain the "@" symbol. The password field should have a minimum length of 8 characters. If either of
these conditions is not met, an error message “Invalid email or password!” should be displayed in red color as a
paragraph text below the form. If the password is valid the message “Valid email and password!” must be
displayed in green color as a paragraph text below the form.
Your code should run when the user clicks the submit button and should prevent the form from submitting if
the input is invalid. The input type of email must be text and the input type of password must be password
without any minLength attribute specified. */

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const submitBtn =  document.getElementById("submitBtn");

const validationMsg = document.getElementById("validationMsg")

const form = document.getElementById("loginForm")

form.addEventListener("submit", () => {
    event.preventDefault(); // prevent from submission

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // validate email
    if (!emailValue.includes("a")) {
        validationMsg.innerText = "Invalid email or password!";
        validationMsg.style.color = "red"
        return;
    }

    // validate password
    if (passwordValue.length < 8) {
        validationMsg.innerText = "Invalid email or password!";
        validationMsg.style.color = "red"
        return;
    }

    // input is valid
    validationMsg.innerText = "Valid email and password!";
    validationMsg.style.color = "green";

})