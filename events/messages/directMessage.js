const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'directMessage',

    async execute ( message, client ) {
        const user = message.author;

        if( user.bot ) return;

        const embed = new MessageEmbed()
            .setAuthor(`${user.username} (${user.id})`)
            .setColor("#EE82EE")
            .setDescription(`**Action**: dm\n**Contenu**: ${message.content}`)
            .setTimestamp()
            .setFooter( user.username, user.avatarURL() );
        
        user.send("Message reçu");

        let guild = await client.getGuild(message.guild);
    
        message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);
    },
}