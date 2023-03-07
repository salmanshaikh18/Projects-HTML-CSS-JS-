/* 14. Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item. */

const calculateTotalCoast = (cart) => {
    let totalCoast = 0;

    cart.forEach(item => {
        totalCoast += item.unitPrice * item.quantity;
    });

    return console.log("Total coast of items is: ", totalCoast, "Rs.")
}

cart = [
    {
        unitPrice: 100, quantity: 2
    },

    {
        unitPrice: 200, quantity: 1
    },

    {
        unitPrice: 300, quantity: 1
    }
]

calculateTotalCoast(cart)