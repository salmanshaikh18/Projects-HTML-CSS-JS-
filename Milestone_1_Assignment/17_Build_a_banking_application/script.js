/* 17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal. */

// define an object to represent a customer account
let userDetails = {
    name: "Salman",
    balance: 10000
}

// function to deposit money in the customer bank account;
function deposit(amount) {
    userDetails.balance += amount;
    return console.log(`Deposited ${amount}. New balance is ${userDetails.balance}.`)
}

// funtion to withdraw money from the customer bank account
function withdraw(amount) {
    if (amount > userDetails.balance) {
        console.log("Insufficient balance. Curren balance is", userDetails.balance);
    }
    else {
        userDetails.balance -= amount;
        return console.log(`Withdrew ${amount}. New balance is ${userDetails.balance}.`)
    }
}
// Example usage
console.log(`Account balance for ${userDetails.name} is ${userDetails.balance}.`);
deposit(500);
withdraw(200);

