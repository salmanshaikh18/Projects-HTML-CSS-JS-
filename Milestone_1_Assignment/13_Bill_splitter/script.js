/* 13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group. */

function totalBill(costOfDishes, numberOfPeople) {

    let totalCoast = 0;
    let costPerPerson = 0;
    // creating a for loop for adding all the cost of dishes on costOfDishes variable;
    for (costs of costOfDishes) {
        totalCoast += costs
    }

    costPerPerson = totalCoast / numberOfPeople;

    let result = {
        Total_Coast_of_dishes : totalCoast,
        Cost_Per_person : costPerPerson
    }

    return console.log(result);
}

let costOfDishes = [100, 100, 800];
let numberOfPeople = 5
console.log("cost of all dishes: ", costOfDishes)
totalBill(costOfDishes, numberOfPeople)
