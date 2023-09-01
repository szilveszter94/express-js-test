import express from "express";
const app = express();

app.get('/', (req, res) => {
    const q = req.query;
    console.log(q);
    res.send(`Ciao ${q.name}`);
});

app.get('/users/:userId', (req, res) => {
    res.send(`The user id is: ${req.params.userId}`);
});

app.get('/math/:op', (req, res) => {

    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);

    const { op } = req.params;

    const result = op === "add" ? x + y : op === "subtract" ? x - y : op === "multiply" ? x * y : op === "divide" ? x / y : false;

    const resultObject = {
        numbers: {
            x: x,
            y: y
        },
        operation: op,
        result: result ? result : `Unrecognizable operation name`
    }

    res.send(resultObject);

});

app.listen(3000, () => {
    console.log(`Open this link in your browser: http://127.0.0.1:3000`);
});