"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.send(`Hello From Express`);
});
app.listen(PORT, () => {
    console.log(`Server listening on :- ${PORT}`);
});
