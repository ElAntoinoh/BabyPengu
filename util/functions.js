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

        client.getGuild = async guild => {
            const data = await Guild.findOne({ guildID: guild.id });
            if(data) return data;
            return client.config.defaultSettings;
        };

        client.updateGuild = async( guild, settings ) => {
            let data = await client.getGuild(guild);

            if( typeof data != "object" ) data = {};

            for( const key in settings ) {
                if( data[key] != settings[key] ) data[key] = settings[key];
            }

            return data.updateOne(settings);
        }
    },
};