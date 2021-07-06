module.exports.help = {
    name: 'say',
    aliases: ['say', 'repeat', 'rep'],
    description: 'Fait parler BabyPengu',
    cooldown: 0,
    usage: `<votre_message>`,
    permissions: false,
    args: true,
};

module.exports.run = ( client, message, args ) => {
    message.channel.send(args.join(" "));
};