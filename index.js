const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// conecting to mongoDB database
const connectToDB = require("./db");
connectToDB();

const app = express();
app.use(express.json());

// seeding database with random books
const seedDB = require("./seedDB");
seedDB();

app.use("/", require("./routes/books"));


app.listen(process.env.PORT, () => {
    console.log(`library api implimentation on port ${process.env.PORT}`);
});