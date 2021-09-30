const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'guildMemberAdd',

    async execute( member, client ) {
        const settings = await client.getGuild( member.guild );
        let msg = settings.welcomeMessage;

        if( msg.includes("{{user}}") ) msg = msg.replace("{{user}}", member );

        const embed = new MessageEmbed()
            .setAuthor( `${member.displayName} (${member.id})`, member.user.displayAvatarURL() )
            .setColor("#FFFFFF")
            .setFooter("Un utilisateur a rejoint")
            .setTimestamp();

        message.guild.channels.cache.find( c => c.id = settings.logChannel ).send(msg);
        message.guild.channels.cache.find( c => c.id = settings.logChannel ).send(embed);

        const newUser = {
            guildID: member.guild.id,
            guildName: member.guild.name,
            userID: member.id,
            userName: member.user.tag
        };

        await client.createUser(newUser);
    },
};