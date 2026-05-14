const db = require("../data/db");

const createCustomer = (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required",
            });
        }

        const customer = {
            id: db.customers.length + 1,
            name,
            email,
            phone,
        };

        db.customers.push(customer);

        return res.status(201).json(customer);
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

const getCustomers = (_, res) => {
    return res.json(db.customers);
}

module.exports = {
    createCustomer,
    getCustomers
}