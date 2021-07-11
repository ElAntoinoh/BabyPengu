const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'channelDelete',

    async execute( channel, client ) {
        const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: 'CHANNEL_DELETE',
        });

        const LatestChannelDeleted = fetchGuildAuditLogs.entries.first();

        const { executor } = LatestChannelDeleted;

        const embed = new MessageEmbed()
            .setAuthor("Suppression d'un salon")
            .setColor("#ff00ff")
            .setDescription(`**Action**: suppression d'un salon\n**Nom**: ${channel.name}`)
            .setTimestamp()
            .setFooter( executor.username, executor.displayAvatarURL() );

    client.channels.cache.get('816784812697714688').send(embed);
    },
}