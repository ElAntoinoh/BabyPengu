const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.NEWLINKEDCHANNEL;

module.exports.run = ( client, message, args ) => {
    const categoryID = message.channel.parent.id;
    let nom = args.join(" ");

    message.guild.channels.create( nom, {
        type: 'text',
        parent: categoryID,
        permissionOverwrites: message.channel.permissionOverwrites,
    });

    message.delete();
};