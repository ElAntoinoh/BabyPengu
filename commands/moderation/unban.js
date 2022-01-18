const { MessageEmbed } = require("discord.js");

const { MESSAGES } = require("../../util/constants");

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;

module.exports.run = async ( client, message, args ) => {
    let user = await client.users.fetch(args[0]);

    if( !user ) return message.reply("L'utilisateur n'existe pas!");

    message.guild.members.unban(user);

    const embed = new MessageEmbed()
        .setAuthor( `${user.username} ${user.id}`, user.displayAvatarURL() )
        .setColor("#00FF00")
        .setDescription(`**Action**: unban`)
        .setTimestamp()
        .setFooter( message.author.username, message.author.avatarURL() );
    
    let guild = await client.getGuild(message.guild);

    message.guild.channels.cache.find( c => c.id = guild.logChannel ).send(embed);

    message.channel.send(`**<@${user.id}>** n'est plus ban.`);
};