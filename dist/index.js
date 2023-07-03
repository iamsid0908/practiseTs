"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
mongoose_1.default.connect("mongodb+srv://siddharthchandrakar007:sid@cluster0.o6gohkl.mongodb.net/");
const db = mongoose_1.default.connection;
db.on("open", () => {
    console.log("connected");
});
db.on("error", () => {
    console.log("dis-connected");
});
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(bodyParser.json());
require("./src/routes/product.routes")(app);
const port = 5000;
app.listen(port, () => {
    console.log("server is running on " + port);
});
