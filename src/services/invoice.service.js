const db = require("../data/db");

const generateInvoiceService = (orderId) => {
    const order = db.orders.find(
        (order) => order.id === orderId
    );

    if (!order) {
        throw new Error("Order not found")
    }

    const customer = db.customers.find(
        (customer) => customer.id === order.customerId
    );

    const subTotal = order.items.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
    }, 0);

    const tax = subTotal * 0.18;

    const total = subTotal + tax;

    const invoice = {
        id: db.invoices.length + 1,
        orderId: order.id,
        customer,
        items: order.items,
        subTotal,
        tax,
        total
    }

    db.invoices.push(invoice);

    return invoice;
}

module.exports = {
    generateInvoiceService,
}