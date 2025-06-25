const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

dotenv.config();


 //* App 
 const app=express();


 //* contect to database

 mongoose.connect(process.env.MONGO_URI, {
  dbName:"firebase-auth-sample",
}).then(() => {
  console.log("connected to database");
}).catch((err) => {
  console.log(err);
});
 
//* middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;


app.listen(port,  () => {
  console.log(`Server running at  ${port}/`);
});
