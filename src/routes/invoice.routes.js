const express = require("express");

const {  
generateInvoice
} = require("../controllers/invoice.controller");

const router = express.Router;

router.post("/:orderId", generateInvoice);

module.exports = router;