const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'guildMemberRemove',

    execute( member, client ) {
        const embed = new MessageEmbed()
            .setAuthor( `${member.displayName} (${member.id})`, member.user.displayAvatarURL() )
            .setColor("#ffffff")
            .setFooter("Un utilisateur est parti")
            .setTimestamp();
        
        return client.channels.cache.get('816784812697714688').send(embed);
    },
};