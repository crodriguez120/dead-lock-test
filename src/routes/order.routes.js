const express = require("express");

const {  
createOrder,
removeOrderItem,
updateOrderItemQuantity
} = require("../controllers/order.controller");

const router = express.Router;

router.post("/", createOrder);

router.patch(
    "/:orderId/items/:productId",
    removeOrderItem
)

router.delete(
    "/:orderId/items/:productId",
    removeOrderItem
)

module.exports = router;