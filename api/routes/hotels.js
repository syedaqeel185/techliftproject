const express = require("express");
const {varifyToken, verifyUser, verifyAdmin} = require('../routes/utils/varifyToken');

const Hotel = require("../models/Hotel.js");
const {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotels,
    countByCity,
    countByType,
    } = require("../controllers/hotel");
const { default: createError } = require("./utils/error.js");

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id",verifyAdmin, updateHotel);
router.delete("/:id",verifyAdmin, deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

module.exports = router;
