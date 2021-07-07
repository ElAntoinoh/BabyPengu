module.exports.help = {
    name: 'say',
    aliases: ['say', 'repeat', 'rep'],
    category: 'texts',
    description: 'Fait parler BabyPengu',
    cooldown: 0,
    usage: `<message>`,
    needUser: false,
    applicableOnModerator: true,
    public: true,
    args: true,
};

module.exports.run = ( client, message, args ) => {
    message.channel.send(args.join(" "));
};