
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
server.post("/home", async (req, res) => {
    try {
      const data = new user(req.body);
      console.log("Received data:", data);
  
      await data.save();
  
      console.log("Data saved successfully");
      res.json(data);
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

server.post("/home",async(req,res)=>{
const data  = await new user(req.body);
data.save()
res.json(data);
})
server.listen(8000,()=>{
    console.log("started")
})
