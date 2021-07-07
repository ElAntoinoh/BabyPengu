module.exports.help = {
    name: 'ping',
    aliases: ['ping'],
    category: 'texts',
    description: 'Renvoie pong !',
    cooldown: 10,
    usage: '',
    needUser: false,
    applicableOnModerator: true,
    public: true,
    args: false,
};

module.exports.run = ( client, message, args ) => {
    message.channel.send("pong !");
};