const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;

module.exports.run = ( client, message, args ) => {
    const user = message.mentions.users.first();
    const reason = ( args.splice(1).join(' ') || "Pas de raison spécifiée" );

    user ? message.guild.member(user).ban({reason}) : message.channel.send("L'utilisateur n'existe pas!");

    const embed = new MessageEmbed()
        .setAuthor( `${user.username} ${user.id}`, user.avatarURL() )
        .setColor("#ff0000")
        .setDescription(`**Action**: ban\n**Raison**: ${reason}`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.avatarURL() );

    client.channels.cache.get('816784812697714688').send(embed);
};