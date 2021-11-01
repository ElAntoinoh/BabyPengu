const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.ADDACCESS;

module.exports.run = ( client, message, args ) => {
    const users = message.mentions.users;
    const channel = message.channel;

    users.forEach(user => {
        channel.updateOverwrite( user, {
            VIEW_CHANNEL: true,
        })
            .catch( console.error );
    });
};