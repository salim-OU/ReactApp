const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
     picture:{
        type: String,
        default: "avatar.png",
     },
     bio:{
        type: String,
        default: "bio",
     },
     role:{
        type: String,
        required: true,
        default: "subscriber",
        // subscriber, author, admin
     }
},
{
    timestamps: true,
}

);

const User = mongoose.model("User", userSchema);
module.exports = User