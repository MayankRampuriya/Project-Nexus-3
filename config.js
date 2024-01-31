const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb+srv://mayankrampuriyamr:Mayank69@cluster0.hrtbhi7.mongodb.net/Mayank?retryWrites=true&w=majority");

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(error => console.error('Error connecting to MongoDB:', error));

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String,
        require: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;