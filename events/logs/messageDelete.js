const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'messageDelete',

    async execute( message, client ) {
        const settings = await client.getGuild( message.guild );

        const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
            limit: 1,
            type: 'MESSAGE_DELETE',
        });

        const latestMessageDeleted = fetchGuildAuditLogs.entries.first();

        const { executor } = await latestMessageDeleted;

        if( !message.author ) return;

        if( !message.author.bot && !executor.bot )
        {
            const embed = new MessageEmbed()
                .setAuthor("Suppression d'un message")
                .setColor("#800000")
                .setDescription(`**Salon**: ${message.channel}\n**Auteur**: ${message.author}\n**Contenu**: ${message.content}`)
                .setTimestamp()
                .setFooter( executor.username, executor.displayAvatarURL() );

            message.guild.channels.cache.find( c => c.id = settings.logChannel ).send(embed);
        }
    },
};