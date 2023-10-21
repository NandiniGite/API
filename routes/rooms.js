const express=require("express");
const router=express.Router();
const {getAllRooms,getAllRoomsTesting}=require("../controllers/rooms");

router.route("/").get(getAllRooms);


module.exports=router;