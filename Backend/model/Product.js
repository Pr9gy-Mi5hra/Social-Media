
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
        
    },
    Email: {
        type: String,
        required: true,
    }
});

// const userSchema = mongoose.Schema({
    // Username: {
    //     type: String,
    //     required: true,
    // },
    // Name: {
    //     type: String,
    //     required: true,
    // },
    // Passworad: {
    //     type: String,
    //     required: true,
        
    // },
    // Email: {
    //     type: String,
    //     required: true,
    // }
// });

module.exports = mongoose.model('Product', productSchema);