const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../../config");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    userName: String,
    experience: {
        "type": Number,
        "default": 0,
    },
    level: {
        "type": Number,
        "default": 0,
    },
});

module.exports = mongoose.model("User", userSchema);