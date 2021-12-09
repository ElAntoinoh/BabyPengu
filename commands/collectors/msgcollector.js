const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.COLLECTORS.MSGCOLLECTOR;

module.exports.run = ( client, message, args ) => {
    message.channel.send(`Début de la collecte du message **${args}** !`);

    const filter = msg => msg.content.includes(args[0]);
    const collector = message.channel.createMessageCollector( filter, { time: 10000 } );

    collector.on('end', collected => {
        message.channel.send(`${collected.size-1} messages collectés !`);
    });

    message.delete();
};