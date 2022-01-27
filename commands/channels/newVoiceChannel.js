const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.NEWVOICECHANNEL;

module.exports.run = async( client, message, args ) => {
    const categoryID = message.channel.parent.id;
    let nom = message.channel.name;

    message.guild.channels.create( nom, {
        type: 'voice',
        parent: categoryID,
        permissionOverwrites: message.channel.permissionOverwrites,
    });

    const embed = new MessageEmbed()
        .setAuthor("Création d'un salon vocal")
        .setColor("#0000FF")
        .setDescription(`**Catégorie**: ${message.channel.parent.name}\n**Nom**: ${nom}`)
        .addField("Relié au salon textuel de la même catégorie", `**Nom**: ${message.channel.name}`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.displayAvatarURL() );

    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    message.delete();
};