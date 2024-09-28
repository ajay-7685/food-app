// cart.js

// Define an array to store items in the cart
let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
    // Create an object representing the item
    let item = {
        name: name,
        price: price
    };

    // Add the item to the cart array
    cart.push(item);

    // You can optionally update the UI to reflect the addition to the cart
    console.log(`Added ${name} to cart. Price: $${price}`);
}

// Attach event listeners to "Order Now" buttons
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the name and price of the product
            const productName = button.parentNode.parentNode.querySelector('h1').innerText;
            const productPrice = parseFloat(button.parentNode.parentNode.querySelector('h3').innerText.slice(1)); // Remove the $ sign and convert to number

            // Add the product to the cart
            addToCart(productName, productPrice);
        });
    });

    // You can add additional logic to handle clicking the cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        // You can add logic to display the cart contents or navigate to the cart page
        console.log("Cart icon clicked!");
    });
});
