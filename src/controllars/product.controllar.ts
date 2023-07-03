import productModels ,{Vproducts}from "../models/product.models";

import { Request, Response } from "express";


exports.getAllProduct= async(req:Request,res:Response):Promise<void>=>{
    try{
        const user=await productModels.find({});
        res.status(200).send({user})
    }
    catch{
        res.status(500).json({ error: 'An error occurred while fetching users' });

    }
}

exports.createProduct=async(req:Request,res:Response):Promise<void>=>{
    try{
        const product=await productModels.create(req.body);
        res.status(201).json({
        success:true,
        product
    })
}catch{
    res.status(404).send({message:"something error"})
}
}

exports.getProductById=async(req:Request,res:Response):Promise<void>=>{
    let productId
    try{
        productId=await productModels.findById(req.params.id);
        console.log(productId?.name)
        res.status(200).json({
            sucess:true,
            productId,
    })
    }
    catch(Error:unknown){
        if(!productId){
             res.status(404).send({message:(Error as Error).message})
        }
        res.status(404).json({message:(Error as Error).message})
    }
}

exports.updateProductBysize=async(req:Request,res:Response):Promise<void>=>{
    // const size=req.body.newSize;
    try{
        const product=await productModels.findByIdAndUpdate(req.params.id,req.body)!;
        if(!product){
             res.status(404).json({ error: 'Product not found' });
        }
        
        console.log(product?.name)
        res.status(200).json({
            message:"product is updated",
            product
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            sucess:false
        })
    }
}

exports.updateProduct=(req:Request,res:Response)=>{

    const product=productModels.findById(req.params.id);

   console.log(product)

    productModels.findByIdAndUpdate(req.params.id,req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"something went wrong"});
        }
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}