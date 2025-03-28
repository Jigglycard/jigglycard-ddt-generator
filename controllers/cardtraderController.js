const orderService = require('../services/orderService');

exports.fetchAndProcessOrders = async (req, res) => {
    try {
        await orderService.processOrders();
        res.status(200).send('DDTs generated successfully for new orders.');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
};
