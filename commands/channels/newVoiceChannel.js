const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.NEWVOICECHANNEL;

module.exports.run = ( client, message, args ) => {
    const categoryID = message.channel.parent.id;
    let nom = message.channel.name;

    message.guild.channels.create( nom, {
        type: 'voice',
        parent: categoryID,
        permissionOverwrites: message.channel.permissionOverwrites,
    });
};