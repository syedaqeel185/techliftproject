const Hotel = require("../models/Hotel");

exports.createHotel = async (req, res) => {
  const newHotel = await new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find(req.query);

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.countByCity = async (req, res) => {
  const cities = await req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.countByType = async (req, res) => {



  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
 
 
   
    res.status(200).json([
      {  type: "Hotel", count: hotelCount},
        {type: "apartment", count: apartmentCount},
        {type: "villa", count: villaCount},
        {type: "cabin", count: cabinCount},
       { type: "resort", count: resortCount}
,


    ]);
  } catch (error) {
    res.status(500).send(error);
  }
};
