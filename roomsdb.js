require("dotenv").config();
const connectDB=require("./db/connect");

const Room=require('./model/rooms');
const roomJson=require ('./rooms.json');

const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Room.create(roomJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start();