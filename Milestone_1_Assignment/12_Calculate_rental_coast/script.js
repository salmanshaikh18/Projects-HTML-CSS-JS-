/* 12. Calculate rental cost
A car rental company needs to calculate the cost of a rental based on thq number of days rented and thq type
of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
The total cost would be the rental cost multiplied by the number of days rented.

The rental costs are
Economy = Rs. 4000 /- per dayZ
Midsize = Rs. 10,000 /- per dayZ
Luxury = Rs. 20,000 /- per day.*/

function rentalCoast(numberOfDays, carType) {
    // creation a totalCost variable where we store the total rental cost;
    let totalCost;

    // creating the switch case for applying rental charges by car type and number of days
    switch (carType) {
        case "Economy":
            totalCost = numberOfDays * 4000;
            break;

        case "Midsize":
            totalCost = numberOfDays * 10000;
            break;
        
        case "Luxury":
            totalCost = numberOfDays * 20000;
            break;

        default:
            totalCost = "You entered the wrong input!"
    }

    return console.log(`The rental cost of the ${carType} Car for ${numberOfDays} days is ${totalCost} Rs.`)
}

rentalCoast(2, "Economy")
rentalCoast(2, "Midsize")
rentalCoast(2, "Luxury")
