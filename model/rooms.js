const mongoose=require("mongoose");

const roomSchema=new mongoose.Schema({
            roomName: {
                type:String,
                required:true,
            },
            roomLocation: {
                type:String,
                required:true,
            },
            roomSeatingCapacity: {
                type:Number,
                default:30
            },
            isRoomActive:{
                type:Boolean,
                default:true
            },
});

module.exports=mongoose.model("Room",roomSchema)