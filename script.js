// Cart

let cart = [];

let cartCount = 0;


// Add product to cart

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " added to cart!");
}


// Show Cart

function showCart() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let cartMessage = "Your Cart:\n\n";

    let total = 0;


    cart.forEach(function(product, index) {

        cartMessage +=
            (index + 1) +
            ". " +
            product.name +
            " - ₹" +
            product.price +
            "\n";

        total += product.price;

    });


    cartMessage +=
        "\nTotal Amount: ₹" +
        total;


    alert(cartMessage);
}


// Blog Read More

function readMore(text) {

    alert(text);
}


// Like Blog

function likeBlog(button) {

    let count =
        button.querySelector("span");

    let currentCount =
        parseInt(count.textContent);

    currentCount++;

    count.textContent = currentCount;
}


// Contact Form

function sendMessage(event) {

    event.preventDefault();


    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let message =
        document.getElementById("message").value;


    alert(
        "Thank you " +
        name +
        "!\n\nYour message has been received."
    );


    document.querySelector(".contact-form").reset();
}