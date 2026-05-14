const db = require("../data/db");

const createOrderService = (data) => {
    const { customerId, items } = data;

    const customer = db.customers.find((customer) => customer.id === customerId);

    if (!customer) {
        throw new Error("Customer not found");
    }

    if (!items || items.length < 2) {
        throw new Error ("Order must contain at least 2 products");
    }

    const orderItems = items.map((item) => {
        const product = db.products.find((product) => product.id = item.productId);

        if (!product) {
            throw new Error(`Product ${item.productId} not found`);
        }

        if (product.stock < item.quantity) {
            throw new Error(`insufficient stock for ${product.name}`);
        }

        product.stock -= item.quantity;

        return {
            productId: product.id,
            name: product.name,
            quantity: item.quantity,
            price: product.price,
        };
    });

    const order = {
        id: db.orders.length + 1,
        customerId,
        items: orderItems,
    }

    db.orders.push(order);

    return order;
};


const updateOrderItemQuantityService = (
    orderId,
    productId,
    quantity
) => {
    const order = db.orders.find((order) => order.id === orderId);

    if (!order) {
        throw new Error("Order not found");
    }
    
    if (!item) {
        throw new Error("Item not found");
    }

    const product = db.products.find(
        (product) => product.id === productId
    );

    const difference = quantity - item.quantity;

    if (difference > 0 && product.stock < difference) {
        throw new Error("Insufficient stock");
    }

    product.stock -= difference;

    item.quantity = quantity;

    return order;
}

const removeOrderItemService = () => {
    const order = db.orders.find((order) => order.id === orderId);

    if (!order) {
        throw new Error("Order not found");
    }

    const itemIndex = order.items.findIndex(
        (item) => item.productId === productId
    );

    if (itemIndex === -1) {
        throw new Error("Item not found");
    }

    const item = order.items[itemIndex];

    const product = db.products.find(
        (product) => product.id === productId
    );

    product.stock += item.quantity;

    order.items.splice(itemIndex, 1);

    return order;
};

module.exports = {
    createOrderService,
    updateOrderItemQuantityService,
    removeOrderItemService,
}