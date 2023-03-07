/* 10. Correct a bug
You are working on an e-commerce website where customers can add items to their cart. The cart stores the
quantity of each item that the customer wants to purchase in an array of numbers. However, thq wqbsite is
currently experiencing a bug where the quantity of each item is being rqcorded incorrectly by reducing it to
half. As a result, you need to write a JavaScript function that can double thq quantity of each item in the cart
array to correct the bug. */ 



function dblQunatity(cartQuantity) {
    // creatina a new array to add a doubled quantity item;
    let result = []
    
    // iterate the quantity of an item and double the quantity of an item
    for (let i = cartQuantity[0]; i <= cartQuantity.length; i++) {
        result.push(i+i)
    }
    console.log("Old cart: ", cartQuantity)
    return console.log("New cart: ", result)
}

let cartQuantity = [1, 2, 3, 4, 5,]

dblQunatity(cartQuantity)

