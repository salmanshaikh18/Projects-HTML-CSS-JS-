/* 5} Capitalize
You are building a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changes */

const prompt = require("prompt-sync")();

let name = prompt("Enter the name: ")

// checking the first letter is lowercase using ternary operator
let check = name[0] == name[0].toLowerCase() ? true : false;

// creationg the function for modify the name by capitalize
if (check) {
    function capitalizeName(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    console.log("Modified name: " + capitalizeName(name))
}
else {
    console.log(name)
}
