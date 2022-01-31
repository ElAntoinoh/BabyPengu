const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.CHANNELS.NEWPRIVATECHANNEL;

module.exports.run = async( client, message, args ) => {
    const categoryID = args[0];
    let nom = args.slice(1).join(" ");

    if( !message.guild.channels.cache.find( channel => channel.id === categoryID ) && !message.guild.channels.cache.find( channel => channel.type === "GUILD_CATEGORY" ) )
        return message.channel.send("Vous devez indiquer en premier paramètre l'identifiant d'une catégorie");

    if( !nom ) return message.channel.send("Vous devez indiquer un nom");

    message.guild.channels.create( nom, {
        type: 'text',
        parent: categoryID,
        permissionOverwrites: [
            {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'], // channel non visible par everyone
            },
            {
                id: message.author,
                allow: ['VIEW_CHANNEL', 'MANAGE_MESSAGES', 'MANAGE_CHANNELS', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS'] // channel visible par créateur
            },
        ],
    });

    const categoryName = message.guild.channels.cache.find( c => c.id === categoryID ).name;

    const embed = new MessageEmbed()
        .setAuthor("Création d'un salon textuel")
        .setColor("#0000FF")
        .setDescription(`**Catégorie**: ${categoryName}\n**Nom**: ${nom}`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.displayAvatarURL() );

    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    message.delete();
};