const mongoose = require("mongoose");
const { Guild, User } = require("../models/index");

module.exports = {
    name: 'functions',

    execute(client) {
        client.createGuild = async guild => {
            const merge = Object.assign( { _id: mongoose.Types.ObjectId() }, guild );

            const createGuild = await new Guild(merge);

            createGuild.save().then( g => console.log(`Nouveau serveur ${g.guildName}`) );
        };

        client.getGuild = async guild => {
            const data = await Guild.findOne({ guildID: guild.id });
            if(data) return data;
            return client.config.DEFAULTSETTINGS;
        };

        client.updateGuild = async( guild, settings ) => {
            let data = await client.getGuild(guild);

            if( typeof data != "object" ) data = {};

            for( const key in settings ) {
                if( data[key] != settings[key] ) data[key] = settings[key];
            }

            return data.updateOne(settings);
        };

        /* User */

        client.createUser = async user => {
            const merge = Object.assign( { _id: mongoose.Types.ObjectId() }, user );

            const createUser = await new User(merge);

            createUser.save().then( u => console.log(`Nouvel utilisateur ${u.userName}`) );
        }

        client.getUser = async user => {
            const data = await User.findOne({ userID: user.id });
            if(data) return data;
            return;
        };

        client.getUsers = async guild => {
            const data = await User.find({ guildID: guild.id });
            if(data) return data;
            return;
        };

        client.updateUser = async( user, settings ) => {
            let data = await client.getUser(user);

            if( typeof data != "object" ) data = {};

            for( const key in settings ) {
                if( data[key] != settings[key] ) data[key] = settings[key];
            }

            return data.updateOne(settings);
        };

        client.addExp = async( client, member, exp ) => {
            const userToUpdate = await client.getUser(member);
            const updatedExp = userToUpdate.experience + exp;
            await client.updateUser(member, { experience: updatedExp});
        };

        client.removeExp = async( client, member, exp ) => {
            const userToUpdate = await client.getUser(member);
            const updatedExp = userToUpdate.experience - exp;
            await client.updateUser(member, { experience: updatedExp});
        };
    },
};