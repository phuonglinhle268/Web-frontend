const cart = [
    { name: "Men men", price: 30000, quantity: 2 },
    { name: "Mi tom", price: 5000, quantity: 1 },
    { name: "Banh bao", price: 15000, quantity: 3 }
];

function totalPrice(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

console.log("Tong tien la:", totalPrice(cart));