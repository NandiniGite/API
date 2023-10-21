const rooms=require('../model/rooms')

const getAllRooms=async(req,res)=>{
    const data= await rooms.find({});
    res.status(200).json({data});
};

const getAllRoomsTesting=async(req,res)=>{
    const data= await rooms.find(req.query);
    res.status(200).json({data});
};

module.exports={getAllRooms,getAllRoomsTesting};