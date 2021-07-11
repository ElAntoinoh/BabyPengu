const mongoose = require("mongoose");
const { Guild } = require("../models/index");

module.exports = {
    name: 'functions',

    execute(client) {
        client.createGuild = async guild => {
            const merge = Object.assign( { _id: mongoose.Types.ObjectId() }, guild );

            const createGuild = await new Guild(merge);

            createGuild.save().then( g => console.log(`Nouveau serveur ${g.guildName}`) );
        }
    },
};