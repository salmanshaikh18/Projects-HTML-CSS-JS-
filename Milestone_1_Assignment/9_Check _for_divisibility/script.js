/* 9. Check for divisibility
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continue statement. */

function check(numbers) {

let result = []
for (value of numbers) {

    if (value % 3 == 0 && value % 2 != 0) {
        result.push(value)
    }
}

console.log("The numbers divisible by 3 or not by 2: ", result )

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

check(numbers)