/* 1} Password Validator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console */

const prompt = require("prompt-sync")(); // If this code throws an error than type "npm install prompt-sync" in terminal and enter ; if first step is not working than comment first line of code.

let password = prompt("Enter Password:");
let confirmPassword = prompt("Confirm Password:");

if (password === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}
