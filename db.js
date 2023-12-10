const mongoose = require("mongoose");

const connectToDB = async () => {
    const DB = process.env.DATABASE;
    mongoose.connect(DB).then(() => {
        console.log("mongodb connected");
    }).catch((err) => console.log("error in connecting database"));
}

module.exports = connectToDB;