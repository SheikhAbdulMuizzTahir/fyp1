const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI || "mongodb://127.0.0.1:27017", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}
module.exports = connectDB;