module.exports.help = {
    name: 'ping',
    aliases: ['ping'],
    description: 'Renvoie pong !',
    cooldown: 10,
    usage: '',
    permissions: false,
    args: false,
};

module.exports.run = ( client, message, args ) => {
    message.channel.send("pong !");
};