"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductControllar = require("../controllars/product.controllar");
module.exports = (app) => {
    app.get("/api/product", ProductControllar.getAllProduct);
    app.post("/api/product", ProductControllar.createProduct);
    app.get("/api/product/:id", ProductControllar.getProductById);
    app.put("/api/product/a/:id", ProductControllar.updateProductBysize);
    app.put("/api/product/:id", ProductControllar.updateProduct);
};
