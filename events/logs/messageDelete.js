const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'messageDelete',

    async execute( message, client ) {
        const settings = await client.getGuild(message.guild);

        if( !message.content.startsWith(settings.prefix) )
        {
            const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
                limit: 1,
                type: 'MESSAGE_DELETE',
            });

            const latestMessageDeleted = fetchGuildAuditLogs.entries.first();

            const { executor } = latestMessageDeleted;

            const embed = new MessageEmbed()
                .setAuthor("Suppression d'un message")
                .setColor("#800000")
                .setDescription(`**Action**: suppression d'un message\n**Salon**: ${message.channel.name}\n**Auteur**: ${message.author}\n**Contenu**: ${message.content}`)
                .setTimestamp()
                .setFooter( executor.username, executor.displayAvatarURL() );

            client.channels.cache.get('816784812697714688').send(embed);
        }
    },
};