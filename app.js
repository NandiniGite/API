const express=require("express");
const app=express();

require("dotenv").config();
const connect=require('./db/connect');
const PORT=process.env.PORT || 5000;

const rooms_route=require("./routes/rooms");
app.get("/",(req,res)=>{
    res.send("Hii I am live");
});

app.use("/api/rooms",rooms_route);
const start= async()=>{
    try{
        await connect(process.env.MONGODB_URL);
     app.listen(PORT,()=>{
        console.log(`${PORT} Connected`);
     })
    }catch(error){
        console.log(error);
    }
}
start();