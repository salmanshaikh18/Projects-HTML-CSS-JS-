/* 7} Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. ;owever, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase but also
affect the accuracy of the purchase order.To solve this problem, the application needs to remove duplicate items from the customer's cart. Thq problem
should take the customer's cart with duplicates as input, and rqturn a new cart without duplicates.
Write a program to solve the problem of duplicate items in the cart by removing duplicates.*/

let cart = ["shirt", "pants", "shoes", "shirt", "jacket", "shoes"];
let newCart = []

// iterate the cart
for (item of cart) {
    // adding the cart items on new cart those are not include in newcart by via iterate
    if (!newCart.includes(item)) {
        newCart.push(item)
    }
}
console.log("Original Cart: ", cart)
console.log("New Cart: ", newCart)