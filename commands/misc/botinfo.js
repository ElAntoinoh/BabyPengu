const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MISC.BOTINFO;

module.exports.run = ( client, message, args ) => {
    const embed = new MessageEmbed()
        .setColor("#b4e0e0")
        .setAuthor(`${client.user.username} Info`, client.user.avatarURL)
        .addFields(
            { name: 'Mémoire',      value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,        inline: true },
            { name: 'Uptime',       value: `${Math.floor(client.uptime / 1000 / 60)} minutes`,                       inline: true },
            { name: '\u200b',       value: `\u200b`,                                                                 inline: true },
            { name: 'Serveurs',     value: `${client.guilds.cache.size.toString()}`,                                 inline: true },
            { name: 'Utilisateurs', value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true },
            { name: '\u200b',       value: `\u200b`,                                                                 inline: true },
            { name: 'Source',       value: `[GitHub](https://github.com/ElAntoinoh/BabyPengu)`,                      inline: true },
        );
    
    message.channel.send(embed);
};