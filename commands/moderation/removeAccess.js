const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.REMOVEACCESS;

module.exports.run = ( client, message, args ) => {
    const users = message.mentions.users;
    const channel = message.channel;

    users.forEach(user => {
        channel.permissionOverwrites.get(user.id).delete();
    });
};