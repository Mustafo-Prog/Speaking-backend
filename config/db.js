const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4", "9.9.9.9"]);

async function connectDB () {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Data base has been connected");
    } catch (error) {
        console.log(error.message + "    Data base connection error")
        process.exit(1);
    }    
}

module.exports = connectDB;