const customers = [];

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 10000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        price: 2000,
        stock: 15,
    }, 
    {
        id: 3,
        name: "Keyboard",
        price: 1500,
        stock: 20,
    }
]

const orders = [];

const invoices = [];

module.exports = {
    customers,
    products,
    orders,
    invoices
}