const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.NEWLINKEDCHANNEL;

module.exports.run = async( client, message, args ) => {
    const categoryID = message.channel.parent.id;
    let nom = args.join(" ");

    message.guild.channels.create( nom, {
        type: 'text',
        parent: categoryID,
        permissionOverwrites: message.channel.permissionOverwrites,
    });

    const embed = new MessageEmbed()
        .setAuthor("Création d'un salon textuel")
        .setColor("#0000FF")
        .setDescription(`**Catégorie**: ${message.channel.parent.name}\n**Nom**: ${nom}`)
        .addField("Copié sur le salon de la même catégorie", `**Nom**: ${message.channel.name}`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.displayAvatarURL() );

    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    message.delete();
};