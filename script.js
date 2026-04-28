function placeOrder(productName) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
        product: productName,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    alert(productName + " added to orders!");
}
