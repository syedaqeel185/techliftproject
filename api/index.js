const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const hotelsRoute = require("./routes/hotels.js");
const roomsRoute = require("./routes/rooms.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");



mongoose.set('strictQuery', true);

const app = express();
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("Disconnected", ()=>{
    console.log('MongoDb Disconnected');
});
mongoose.connection.on("MongoDb Connected", ()=>{
    console.log('MongoDb connected');
});



app.get('/', (req, res) => {

    res.send('Hello World');
	 
})


app.use(cookieParser())
app.use(cors())

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack



  });


  
})


app.listen(8080, () => {
  connectDB();
  console.log("DB Connected");
});
