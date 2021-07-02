module.exports.help = {
    name: 'ping',
    description: 'pong !',
};

module.exports.run = ( client, message, args ) => {
    message.channel.send("pong !");
};