const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'guildMemberAdd',

    async execute( member, client ) {
        const embed = new MessageEmbed()
            .setAuthor( `${member.displayName} (${member.id})`, member.user.displayAvatarURL() )
            .setColor("#ffffff")
            .setFooter("Un utilisateur a rejoint")
            .setTimestamp();
    
        client.channels.cache.get('816784812697714688').send(embed);

        const newUser = {
            guildID: member.guild.id,
            guildName: member.guild.name,
            userID: member.id,
            userName: member.user.tag
        };

        await client.createUser(newUser);
    },
};