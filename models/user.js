const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../../config");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    userName: String,
    permissionLevel: {
        "type": Number,
        "default": 0,
    },
    experience: {
        "type": Number,
        "default": 0,
    },
    level: {
        "type": Number,
        "default": 0,
    },
    birthday: {
        "type": String,
        "default": "0000",
    },
});

module.exports = mongoose.model("User", userSchema);