const express = require("express");
const bodyParser = require("body-parser")

const app = express();

const port = 3000;
const users = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/users", (req, res) => {
    const newUserId = req.body.userId;

    if (!newUserId) {
        return res.status(400).send("Missing User ID");
    }

    if (users.includes(newUserId)) {
        return res.status(400).send("User already exists");
    }

    users.push(newUserId);

    return res.status(201).send("User registered");
});

app.get("/users", (req, res) => {
    return res.json({users});
})

app.listen(port, () => {
    console.log(`Server listening on Port : ${port}`);
});