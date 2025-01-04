const express=require("express");
const app=express();
app.use("/",(req,res)=>{
    res.send("hi node.js");
});
app.use("/hello",(req,res)=>{
    res.send("hello node.js");
});
app.use("/text",(req,res)=>{
    res.send("text node.js");
});
app.listen(3000,()=>{
    console.log("listen sucessfully on port number 3000");

});
