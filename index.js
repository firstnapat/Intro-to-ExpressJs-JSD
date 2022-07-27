import  express  from "express";
// const express = express.Router();
// const express = require('express');
// const { preOrderRouter } = require('./routers/preOrder');
import { preOrderRouter } from "./routers/preOrder.js";
const app = express()
// เอาข้าวมันไก่ 1 จาน
// GET http://localhost:8080/chicken-rice
// GET http://localhost:8080/fried-chicken-rice

// app.get('/chicken-rice', (requests, response) => {
app.get('/:menu', (requests, response) => {
    console.log('Requests parameters')
    console.log(requests.params)
    const { menu } = requests.params;
    const ChickenRice = {
        rice: 'oiled rice',
        // meat: 'boiled chicken',
        // sauces: ['red', 'whilte'],
    }; 
    if (menu === 'fried-chicken-rice') {
        ChickenRice.meat = 'fried-chicken';
        ChickenRice.sauces = ['mea pranom'];
        response.send(ChickenRice);
    } else if (menu==='chicken-rice') {
        ChickenRice.meat = 'boiled chicken';
        ChickenRice.sauces = ['red', 'whilte'];
        response.send(ChickenRice);
    } else {
        response.status(400).send(`We are not serving ${menu}`);
    }
    // default = 200 OK
    // response.send(ChickenRice);
    // status 404
    // response.status(404).end()
});

// app.get('/fried-chicken-rice', (requests, response) => {
//     const ChickenRice = {
//         rice: 'oiled rice',
//         // meat: 'fried chicken',
//         meat: '',
//         sauces: ['mae pra nom'],
//     };
//     // default = 200 OK
//     // response.send(ChickenRice);
//     // status 404
//     response.status(404).end();
// });
// const preOrders = [];

// app.post('/pre-orders', (req, res) => {
//     const { menu, size } = req.query;
//     console.log('Requests query:')
//     console.log(req.query);
//     const preOrder = {
//         id: preOrders.length,
//         menu: menu,
//     };
//     preOrders.push(preOrder);
//     res.status(200).send(`order placed. Your order is ${preOrder.id}`);
// });

// app.delete('/pre-orders/:orderId', (req, res) => {
//     const { menu, orderId } = req.params;
//     const preOrderIndex = preOrders.findIndex((order) > order.id == orderId);
//     if (preOrderIndex === -1) {
//         return res.status(404).send('Oredr not exists');
//     }
//     preOrders[preOrderIndex] = null;
//     res.status(200).send('Canceled your order'); 
//     // preOrder.push(preOrder);
//     // res.status(200).send(`order placed. Your order is ${preOrder.id}`);
// });

//rount ไปอีกไฟล์

app.use('/pre-orders', preOrderRouter);

app.listen(8080, () => {
    console.log('Server is listening on 8080')
})
