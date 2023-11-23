
const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
server.use(express.json())

const arr = []

server.get("/", (req,res)=>{
    res.send("helo muraru")
})

server.post("/home",(req,res)=>{

   arr.push(req.body)
   res.send(arr)
})
server.listen(8000,()=>{
    console.log("started")
})
