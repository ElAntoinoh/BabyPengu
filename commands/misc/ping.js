const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.PING;

module.exports.run = ( client, message, args ) => {
    message.channel.send("pong !");
};