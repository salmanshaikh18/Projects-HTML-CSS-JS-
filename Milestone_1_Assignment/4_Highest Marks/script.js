/* 4} Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks  */

let marks = [45, 88, 87, 67, 83] // Example marks for 5 students;

let highestMarks = marks[0] // initialize highest marks to the first value in the array;

// Iterate through the array to find the highest marks using the ternary operator
for (let i = 0; i <= marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

console.log("The highest marks scored by any student in the class is: " + highestMarks)