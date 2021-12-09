const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.REMOVEACCESS;

module.exports.run = ( client, message, args ) => {
    const users = message.mentions.users;
    const channel = message.channel;

    users.forEach( user => {
        if( !channel.permissionOverwrites.get(user.id) ) message.channel.send(`L'utilisateur **${user.tag}** n'a pas de permissions d'accès à ce salon.`);
        else channel.permissionOverwrites.get(user.id).delete();
    });

    message.channel.send("Changements effectués !").then(msg => {
        setTimeout(() => msg.delete(), 3000)
    });

    message.delete();
};
