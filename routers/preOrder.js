// const express = require('express');
import  express  from "express";

const preOrderRouter = express.Router()
const preOrders = [];

preOrderRouter.post('/', (req, res) => {
    const { menu, size } = req.query;
    console.log('Requests query:')
    console.log(req.query);
    const preOrder = {
        id: preOrders.length,
        menu: menu,
    };
    preOrders.push(preOrder);
    res.status(200).send(`order placed. Your order is ${preOrder.id}`);
});

preOrderRouter.delete('/:orderId', (req, res) => {
    const { menu, orderId } = req.params;
    const preOrderIndex = preOrders.findIndex((order) > order.id == orderId);
    if (preOrderIndex === -1) {
        return res.status(404).send('Oredr not exists');
    }
    preOrders[preOrderIndex] = null;
    res.status(200).send('Canceled your order'); 
    // preOrder.push(preOrder);
    // res.status(200).send(`order placed. Your order is ${preOrder.id}`);
});

export { preOrderRouter };