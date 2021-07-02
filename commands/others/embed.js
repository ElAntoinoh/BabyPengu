const { MessageEmbed } = require("discord.js");

module.exports.help = {
    name: 'embed',
    description: 'Renvoie un embed',
}
module.exports.run = ( client, message, args ) => {
    const embed = new MessageEmbed()
        .setColor("#dc143c")
        .setTitle("Titre de l'embed")
        .setURL("https://google.com")
        .setDescription("Description de l'embed")
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Champ 1", "Valeur 1")
        .addFields(
            { name: "Champ 2", value: "Valeur 2", inline: true },
            { name: "Champ 3", value: "Valeur 3", inline: true },
            { name: "Champ 4", value: "Valeur 4", inline: true }
        )
        .setImage(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("footer de l'embed");
    
    message.channel.send(embed);
}