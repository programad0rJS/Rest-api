const express = require("express");
const faker = require('faker')


const app = express();
const port = 3000;



app.get("/Productos", (req, res) => {
    const Productos = [];

    const { size } = req.query;
    const limit = size || 10;

    for (let index = 0; index < limit; index++) {
        Productos.push({
            nombre: faker.commerce.productName(),
            moneda: parseInt(faker.commerce.price(), 10),
            imagenes: faker.image.imageUrl(),
        })

    }
    res.json(Productos);

});

app.get("/Producto/:producId", (req, res) => {
    const id = req.params.producId;
    res.json({
        id,
        name: 'Producto 2',
        price: 2000
    })


});

app.get("/Producto", (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        })
    } else {
        res.send('No Ay Parametros')
    }

});






app.listen(port, () => {
    console.log("My port: " + port);
});

