
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
server.use(cors({
    origin:"https://verce-test-djrl.vercel.app"
}))
server.use(express.json())

mongoose.connect("mongodb://localhost:27017/verceltes").then(()=>{
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

server.post("/home",async(req,res)=>{
const data  = await new user(req.body);
data.save()
res.json(data);
})
server.listen(8000,()=>{
    console.log("started")
})
