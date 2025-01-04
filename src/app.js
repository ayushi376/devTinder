const express=require("express");
const app=express();
// This will only handle get call to /user
app.get("/user",(req,res)=>{
    res.send({firstname:"Ayushi",lastname:"Agarwal"});
});
app.post("/user",(req,res)=>{
    res.send("Data successfully saved in database ");
});
app.delete("/user",(req,res)=>{
    res.send("Deleted successfully");
});
app.patch("/user",(req,res)=>{
    res.send("succesfully patch");
});
// This will match all the HTTP method API call /test
app.use("/text",(req,res)=>{
    res.send("text node.js");
});

app.listen(3000,()=>{
    console.log("listen sucessfully on port number 3000");

});
