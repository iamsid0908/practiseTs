import mongoose from "mongoose";
const express= require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express();

mongoose.connect("mongodb+srv://siddharthchandrakar007:sid@cluster0.o6gohkl.mongodb.net/")
const db=mongoose.connection
db.on("open",()=>{
    console.log("connected")
})
db.on("error",()=>{
    console.log("dis-connected");
})

app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use(bodyParser.json());

require("./src/routes/product.routes")(app)
const port=5000;
app.listen(port,()=>{
    console.log("server is running on "+port)
})