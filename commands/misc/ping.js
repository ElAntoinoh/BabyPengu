const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.PING;

module.exports.run = async ( client, message, args ) => {
    const msg = await message.channel.send("Ping !");

    msg.edit(`Pong !\nLatence du bot: ${msg.createdTimestamp - message.createdTimestamp}ms\nLatence de l'API: ${Math.round(client.ws.ping)}ms`);
};