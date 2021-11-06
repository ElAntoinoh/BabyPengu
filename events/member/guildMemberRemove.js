const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'guildMemberRemove',

    async execute( member, client ) {
        const settings = await client.getGuild(member.guild);

        const embed = new MessageEmbed()
            .setAuthor( `${member.displayName} (${member.id})`, member.user.displayAvatarURL() )
            .setColor("#000000")
            .setFooter("Un utilisateur est parti")
            .setTimestamp();
    
        member.guild.channels.cache.find( c => c.id = settings.logChannel ).send(embed);
    },
};