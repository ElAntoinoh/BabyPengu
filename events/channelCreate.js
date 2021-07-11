const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'channelCreate',

    async execute( channel, client ) {
        if( channel.type ==="dm" ) return;
        
        const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: 'CHANNEL_CREATE',
        });

        const LatestChannelCreated = fetchGuildAuditLogs.entries.first();

        const { executor } = LatestChannelCreated;

        const embed = new MessageEmbed()
            .setAuthor("Création d'un nouveau salon")
            .setColor("#ff00ff")
            .setDescription(`**Action**: création d'un salon\n**Nom**: ${channel.name}`)
            .setTimestamp()
            .setFooter( executor.username, executor.displayAvatarURL() );

    client.channels.cache.get('816784812697714688').send(embed);
    },
}