const { createOrderService, removeOrderItemService, updateOrderItemQuantityService } = require("../services/order.service");

const createOrder = (req, res) => {
    try {
        const order = createOrderService(req.body);

        return res.status(201).json(order);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}

const updateOrderItemQuantity = (req, res) => {
    try {
        const { orderId, productId } = req.params;
        const { quantity } = req.body;

        const updatedOrder = updateOrderItemQuantityService(
            Number(orderId),
            Number(productId),
            quantity
        )

        return res.json(updatedOrder);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}

const removeOrderItem = (req, res) => {
    try {
        const { orderId, productId } = req.params;

        const updateOrder = removeOrderItemService(
            Number(orderId),
            Number(productId)
        )

        return res.json(updateOrder);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}

module.exports = {
    createOrder,
    updateOrderItemQuantity,
    removeOrderItem
}
