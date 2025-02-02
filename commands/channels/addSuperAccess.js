const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.ADDSUPERACCESS;

module.exports.run = ( client, message, args ) => {
    const users = message.mentions.users;
    const roles = message.mentions.roles;

    const channel = message.channel;
    const voiceChannels = channel.parent.children.filter( c => c.type === "voice" ).filter( c => c.name === channel.name );
    
    users.forEach( user => {
        channel.updateOverwrite( user, {
            VIEW_CHANNEL   : true,
            MANAGE_MESSAGES: true,
            MANAGE_CHANNELS: true,
            MUTE_MEMBERS   : true,
            DEAFEN_MEMBERS : true,
            MOVE_MEMBERS   : true
        }).catch( console.error );

        if( voiceChannels.length != 0 ) {
            voiceChannels.forEach( c => {
                c.updateOverwrite( user, {
                    VIEW_CHANNEL   : true,
                    MANAGE_MESSAGES: true,
                    MANAGE_CHANNELS: true,
                    MUTE_MEMBERS   : true,
                    DEAFEN_MEMBERS : true,
                    MOVE_MEMBERS   : true
                }).catch( console.error );
            });
        }
    });

    roles.forEach( role => {
        role.members.forEach( member => {
            channel.updateOverwrite( member.user, {
                VIEW_CHANNEL   : true,
                MANAGE_MESSAGES: true,
                MANAGE_CHANNELS: true,
                MUTE_MEMBERS   : true,
                DEAFEN_MEMBERS : true,
                MOVE_MEMBERS   : true
            }).catch( console.error );

            if( voiceChannels.length != 0 ) {
                voiceChannels.forEach( c => {
                    c.updateOverwrite( member.user, {
                        VIEW_CHANNEL   : true,
                        MANAGE_MESSAGES: true,
                        MANAGE_CHANNELS: true,
                        MUTE_MEMBERS   : true,
                        DEAFEN_MEMBERS : true,
                        MOVE_MEMBERS   : true
                    }).catch( console.error );
                });
            }
        });
    });

    message.channel.send("Changements effectués !").then(msg => {
        setTimeout(() => msg.delete(), 3000)
    });

    message.delete();
};
