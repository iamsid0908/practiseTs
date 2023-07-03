"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_models_1 = __importDefault(require("../models/product.models"));
exports.getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield product_models_1.default.find({});
        res.status(200).send({ user });
    }
    catch (_a) {
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});
exports.createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_models_1.default.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    }
    catch (_b) {
        res.status(404).send({ message: "something error" });
    }
});
exports.getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productId;
    try {
        productId = yield product_models_1.default.findById(req.params.id);
        console.log(productId === null || productId === void 0 ? void 0 : productId.name);
        res.status(200).json({
            sucess: true,
            productId,
        });
    }
    catch (Error) {
        if (!productId) {
            res.status(404).send({ message: Error.message });
        }
        res.status(404).json({ message: Error.message });
    }
});
exports.updateProductBysize = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const size=req.body.newSize;
    try {
        const product = yield product_models_1.default.findByIdAndUpdate(req.params.id, req.body);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
        }
        console.log(product === null || product === void 0 ? void 0 : product.name);
        res.status(200).json({
            message: "product is updated",
            product
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false
        });
    }
});
exports.updateProduct = (req, res) => {
    const product = product_models_1.default.findById(req.params.id);
    console.log(product);
    product_models_1.default.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
        if (!data) {
            res.status(404).send({ message: "something went wrong" });
        }
        res.send(data);
    })
        .catch(err => {
        res.status(500).send({ message: err.message });
    });
};
