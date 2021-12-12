const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.REMOVEACCESS;

module.exports.run = ( client, message, args ) => {
    const users = message.mentions.users;
    const roles = message.mentions.roles;

    const channel = message.channel;
    const voiceChannels = channel.parent.children.filter( c => c.type === "voice" ).filter( c => c.name === channel.name );

    users.forEach( user => {
        if( channel.permissionOverwrites.get(user.id) ) channel.permissionOverwrites.get(user.id).delete();
        
        if( voiceChannels.length != 0 ) {
            voiceChannels.forEach( c => {
                if( c.permissionOverwrites.get(user.id) ) c.permissionOverwrites.get(user.id).delete();
            });
        }
    });

    roles.forEach( roles => {
        roles.members.forEach( member => {
            if( channel.permissionOverwrites.get(member.user.id) ) channel.permissionOverwrites.get(member.user.id).delete();

            if( voiceChannels.length != 0 ) {
                voiceChannels.forEach( c => {
                    if( c.permissionOverwrites.get(member.user.id) ) c.permissionOverwrites.get(member.user.id).delete();
                });
            }
        });
    });

    message.channel.send("Changements effectués !").then(msg => {
        setTimeout(() => msg.delete(), 3000)
    });

    message.delete();
};
