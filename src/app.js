const express = require("express");

const customerRoutes = require("./routes/customer.routes");
const orderRoutes = require("./routes/order.routes");
const invoiceRoutes = require("./routes/invoice.routes");

const app = express();

app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/invoices", invoiceRoutes);

app.get("/", (_, res) => {
    res.json({
        message: "Deadlock Solutions Technical Test API"
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})