const express = require('express');
const {varifyToken, verifyUser, verifyAdmin} = require('../routes/utils/varifyToken');

const {updateUser, deleteUser, getUser, getAllUsers} = require('../controllers/user');


const router = express.Router();


// router.get('/checkauthentication', varifyToken, (req, res, next) => {
//     res.send('Login successful')
// })
// router.get('/checkuser/:id', verifyUser , (req, res, next) => {
//     res.send('You can delete this user')
// })
// router.get('/checkadmin/:id', verifyAdmin , (req, res, next) => {
//     res.send('Hello Admin, You have now access to all users')

// })


router.put("/:id",verifyUser, updateUser);
router.delete("/:id",verifyUser, deleteUser);
router.get("/:id",verifyUser, getUser);
router.get("/",verifyAdmin, getAllUsers);




module.exports = router;