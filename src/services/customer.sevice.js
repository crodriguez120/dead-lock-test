// Customer service

const db = require("../data/db");

const createCustomer = ({name, email}) => {
    if (!name || !email) {
        throw new Error("Name and email are required");
    }

    const customer = {
        id: db.customers.length + 1,
        name,
        email,
    }

    db.customers.push(customer);

    return customer;
};

module.exports = {
    createCustomer,
}