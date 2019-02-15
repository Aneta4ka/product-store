const express = require('express');

const app = express();

const port = 3000;

const database = {
    1: {
        id: "1",
        name: "basketball",
        price: 59.99,
        description: "with this bouncy ball you could beat Michael Jordan!",
        stock: 5,

    },
    2: {
        id: "2",
        name: "t-shirt",
        price: 69.99,
        description: "this is a cool t-shirt!",
        stock: 6,
    },

    3: {
        id: "3",
        name: "pants",
        price: 89.99,
        description: "this is blue pants!",
        stock: 7,
    },

};


app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/products', (req, res) => {
    res.send(database);
});

app.get('/products/:id', (req, res) => {
    res.send('');
});

app.listen(port, () => {
    console.log("app is running");

});