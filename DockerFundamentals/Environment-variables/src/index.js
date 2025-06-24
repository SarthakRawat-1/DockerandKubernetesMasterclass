const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send(`Hello From ${process.env.APP_NAME}`);
})

app.listen(PORT, () => {
    console.log(`Server listening on :- ${PORT}`);
})