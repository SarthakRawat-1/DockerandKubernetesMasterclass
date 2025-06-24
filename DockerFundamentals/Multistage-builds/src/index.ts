import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send(`Hello From Express`);
})

app.listen(PORT, () => {
    console.log(`Server listening on :- ${PORT}`);
})