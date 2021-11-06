const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.COLLECTORS.REACTCOLLECTOR;

module.exports.run = ( client, message, args ) => {
    const filter = reaction => reaction.emoji.name === `${args[0]}`;
    const collector = message.createReactionCollector(filter, { time: 10000 });

    collector.on('end', collected => {
        message.channel.send(`${collected.size} réactions collectées !`);
    });
};