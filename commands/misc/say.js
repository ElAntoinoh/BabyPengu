const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.SAY;

module.exports.run = ( client, message, args ) => {
    message.delete();
    message.channel.send( args.join(" ") );
};