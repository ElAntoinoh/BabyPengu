const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'directMessage',

    execute( message, client ) {
        const user = message.author;

        if( user.bot ) return;

        const embed = new MessageEmbed()
            .setAuthor(`${user.username} (${user.id})`)
            .setColor("#ff00ff")
            .setDescription(`**Action**: dm\n**Contenu**: ${message.content}`)
            .setTimestamp()
            .setFooter( user.username, user.avatarURL() );
        
        user.send("Message reçu");

        client.channels.cache.get("816784812697714688").send(embed);
    },
}