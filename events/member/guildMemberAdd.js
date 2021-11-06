const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'guildMemberAdd',

    async execute( member, client ) {
        const settings = await client.getGuild(member.guild);

        let msg = settings.welcomeMessage;

        if( msg.includes("{{user}}") ) msg = msg.replace("{{user}}", member.user.username );

        const embed = new MessageEmbed()
            .setAuthor( `${member.displayName} (${member.id})`, member.user.displayAvatarURL() )
            .setColor("#FFFFFF")
            .setFooter("Un utilisateur a rejoint")
            .setTimestamp();

        member.guild.channels.cache.find( c => c.id = settings.logChannel ).send(msg);
        member.guild.channels.cache.find( c => c.id = settings.logChannel ).send(embed);

        const newUser = {
            userID:    member.id,
            userName:  member.user.tag
        };

        await client.createUser(newUser);
    },
};