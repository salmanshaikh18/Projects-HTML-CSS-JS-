/* 15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers. */



const percentage = (originalPrice, discountedPrice) => {

    let discountPrice = originalPrice - discountedPrice;

    let discountPercentage = (discountPrice/originalPrice) * 100

    return console.log("The discount percentage is: ", Math.round(discountPercentage), "%")
}

let price = 300;
let discountedPrice = 80;

percentage(price, discountedPrice)

