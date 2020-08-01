const express = require('express');
const app = express();

//Middleware
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

//Endpoint definíció
app.get('/', (req, res) => {
    console.log(req.method, req.path);
    res.json({
        alive: true
    });
});

//Listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});

//módosítottam