const express = require("express");

const {  
createOrder,
removeOrderItem,
updateOrderItemQuantity,
getOrders,
getOrderById
} = require("../controllers/order.controller");

const router = express.Router();

router.post("/", createOrder);

router.patch(
    "/:orderId/items/:productId",
    updateOrderItemQuantity
)

router.delete(
    "/:orderId/items/:productId",
    removeOrderItem
)

router.get("/", getOrders);

router.get("/:orderId", getOrderById);

module.exports = router;