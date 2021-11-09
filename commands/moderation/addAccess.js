const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.ADDACCESS;

module.exports.run = ( client, message, args ) => {
    const users = message.mentions.users;
    const channel = message.channel;

    users.forEach( user => {
        if( channel.permissionOverwrites.get(user.id) ) message.channel.send(`L'utilisateur **${user.tag}** a déjà accès à ce salon.`);
        else {
            channel.updateOverwrite( user, {
                VIEW_CHANNEL: true,
            }).catch( console.error );
        }
    });

    message.channel.send("Changements effectués !");
};