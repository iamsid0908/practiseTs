const ProductControllar=require("../controllars/product.controllar")
import { Express } from 'express';

module.exports=(app:Express):void=>{
    app.get("/api/product",ProductControllar.getAllProduct);
    app.post("/api/product",ProductControllar.createProduct);
    app.get("/api/product/:id",ProductControllar.getProductById);
    app.put("/api/product/a/:id",ProductControllar.updateProductBysize);
    app.put("/api/product/:id",ProductControllar.updateProduct);
}