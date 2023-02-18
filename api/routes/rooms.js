const express = require('express');
const {varifyToken, verifyUser, verifyAdmin} = require('../routes/utils/varifyToken');
const {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getAllRooms
    } = require("../controllers/room.js");


const router = express.Router();



router.post("/:hotelId", verifyAdmin, createRoom);
router.put("/:id",verifyAdmin, updateRoom);
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getAllRooms);




module.exports = router;

