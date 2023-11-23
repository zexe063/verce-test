
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
server.use(cors({
    origin:"https://verce-test-djrl.vercel.app"
}))
server.use(express.json())

mongoose.connect("mongodb+srv://hackx0315:CTKR7Lb5pkygxIl9@cluster0.nnmfi6r.mongodb.net/verceltes").then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("eroro")
})

const userSchema = new mongoose.Schema({
    email:String,
    password:String
})
const user = mongoose.model("user", userSchema);


server.get("/", (req,res)=>{
    res.send("helo muraru")
})
server.get("/home",async(req,res)=>{
    const data =  await user.find();
    res.json(data)
})

server.post("/home",async(req,res)=>{
const data  = await new user(req.body);
data.save()
res.json(data);
})
server.listen(8000,()=>{
    console.log("started")
})
