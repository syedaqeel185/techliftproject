const User = require("../models/User");


exports.updateUser = async (req, res) => {
try {
const updatedUser = await User.findByIdAndUpdate(
req.params.id,
{ $set: req.body },
{ new: true }
);
res.status(200).json(updatedUser);
} catch (error) {
    res.status(500).send(error);
    }
    };
    
    exports.deleteUser = async (req, res) => {
    try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted Successfully");
    } catch (error) {
    res.status(500).send(error);
    }
    };
    exports.getUser = async (req, res) => {
        try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        } catch (error) {
        res.status(500).send(error);
        }
        };
        
        exports.getAllUsers = async (req, res) => {
        try {
        const users = await User.find();
        res.status(200).json(users);
        } catch (error) {
        res.status(500).send(error);
        }
        };