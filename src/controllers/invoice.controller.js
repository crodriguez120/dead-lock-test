const { generateInvoiceService } = require("../services/invoice.service");

const generateInvoice = (req, res) => {
    try {
        const { orderId } = req.params;

        const invoice = generateInvoiceService(Number(orderId));

        return res.status(201).json(invoice);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    generateInvoice,
}